"use client"
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { UserType } from '@/src/type/userType'

import { Pencil, Download } from "lucide-react"
import React from 'react'
import { useUserContext } from '../context/UserContext'
import { useModal } from '../context/ModalContext'
import { useRouter } from 'next/navigation'

const UserTable = () => {

    const { users, setUserId } = useUserContext()
    const { setIsOpen, setModalType } = useModal()
    const router = useRouter()

    const onEdit = (userId: number) => {
        setIsOpen(true)
        setUserId(userId)
        setModalType('edit')
    }

    return (
        <Table className='w-1/2 m-auto'>
            <TableCaption>A list of users data.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    users.map((user: UserType) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell className='flex'>
                                <Button onClick={() => router.push(`/preview/${user.id}`)} variant="ghost">
                                    <Download />
                                </Button>
                                <Button onClick={() => onEdit(user.id)} variant="ghost">
                                    <Pencil />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default UserTable