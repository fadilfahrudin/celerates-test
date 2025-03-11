"use client"
import React, { useMemo } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import { useModal } from "../context/ModalContext";
import { Button } from "@/components/ui/button";
import { useUserContext } from "../context/UserContext";
import { UserType } from "../type/userType";

const PDFPreview = () => {
    const { isOpen, setIsOpen, modalType } = useModal()
    const { users, userId } = useUserContext()

    const userData = useMemo(() => {
        return users.find((user: UserType) => user.id === userId)
    }, [users, userId])

    return (
        <>
            {
                isOpen && modalType === 'preview' &&
                <div className='w-full h-screen fixed left-0 top-0 backdrop-blur-sm bg-black/50 flex flex-col justify-center items-center gap-4 z-10'>
                    <PDFViewer className="w-auto h-3/4 aspect-[2/3]">
                        <PDFDocument userData={userData as UserType} />
                    </PDFViewer>

                    <div className="flex gap-4">
                        <Button variant='outline' onClick={() => setIsOpen(false)}>Close</Button>
                        <PDFDownloadLink document={<PDFDocument userData={userData as UserType} />} fileName={`${userData?.name}-profile.pdf`}>
                            {({ loading }) => (
                                <Button>
                                    {loading ? "Loading PDF..." : "Download PDF"}
                                </Button>
                            )}
                        </PDFDownloadLink>
                    </div>

                </div>
            }
        </>
    );
};

export default PDFPreview;
