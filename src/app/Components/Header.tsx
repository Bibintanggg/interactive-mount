import { UserData } from "@/lib/user-inform";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Header({ title, notif, search }: { title: string, notif: string | React.ReactNode, search: string | ReactNode }) {
    return (
        <header className="flex justify-between w-full">
            <p className="text-4xl font-sans font-medium">{title}</p>

            <div className="flex items-center gap-5">
                <button className="border w-10 h-10 rounded-full items-center flex justify-center">
                    {search}
                </button>

                <button className="border w-10 h-10 rounded-full items-center flex justify-center">
                    {notif}
                </button>

                <hr className="border border-black/40 h-10 rounded-full" />

                {UserData.map((item) => (
                    <div key={item.id} className="flex font-sans">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-end">
                                <p>{item.name}</p>
                                <p className="text-sm text-black/50">{item.email}</p>
                                <p className="text-sm text-black/50">{item.role}</p>
                            </div>
                            <Image src={item.profile} alt={item.profile} width={40} height={40} className="rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

        </header>
    )
}