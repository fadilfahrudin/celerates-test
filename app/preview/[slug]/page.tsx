"use client"

import React, { useMemo } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { UserType } from "@/src/type/userType";
import PDFDocument from "@/src/components/PDFDocument";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/src/context/UserContext";
import { useRouter } from 'next/navigation';

const PDFPreview = ({ params }: { params: { slug: string } }) => {
    const { users } = useUserContext()
    const router = useRouter()

    const userData = useMemo(() => {
        return users.find((user: UserType) => user.id === Number(params.slug))
    }, [users, params.slug])

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-4 z-10'>

            {
                userData && (
                    <PDFViewer className="w-auto h-3/4 aspect-[2/3]">
                        <PDFDocument userData={userData} />
                    </PDFViewer>
                )
            }

            <div className="flex gap-4">
                <Button variant='outline' onClick={() => router.back()}>Back</Button>
                <PDFDownloadLink document={<PDFDocument userData={userData as UserType} />} fileName={`${userData?.name}-profile.pdf`}>
                    {({ loading }) => (
                        <Button>
                            {loading ? "Loading PDF..." : "Download PDF"}
                        </Button>
                    )}
                </PDFDownloadLink>
            </div>

        </div>
    );
};

export default PDFPreview;