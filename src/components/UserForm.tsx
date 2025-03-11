"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React, { useEffect, useMemo } from 'react'
import { useModal } from '../context/ModalContext'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useUserContext } from "../context/UserContext"
import { UserType } from "../type/userType"

const formSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(50, { message: "Name must be at most 50 characters" }),

    email: z.string()
        .email({ message: "Please enter a valid email address." }),

    phone: z.string()
        .min(10, { message: "Phone number must be at least 10 digits." })
        .max(28, { message: "Phone number must be at most 28 digits." }),
})

const UserForm = () => {
    const { isOpen, setIsOpen, modalType } = useModal()
    const { users, setUsers, userId } = useUserContext()

    const userData = useMemo(() => {
        return users.find((user: UserType) => user.id === userId)
    }, [users, userId])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    useEffect(() => {
        if (userData) {
            form.reset({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
            })
        }
    }, [userData, form])

    const updateUser = (id: number, updatedUser: UserType) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
        );
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (userId) {
            const updatedUser: UserType = { id: userId, ...values };
            updateUser(userId, updatedUser);
            console.log("User updated:", values)
        }
        setIsOpen(false)
    }


    return (
        <>
            {
                isOpen && modalType === "edit" &&
                <div className='w-full h-screen fixed left-0 top-0 backdrop-blur-sm bg-black/50 flex justify-center items-center z-10'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 w-1/4 rounded-md">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nama" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="Phone" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>Cencel</Button>
                                <Button type="submit">Save</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            }
        </>
    )
}

export default UserForm