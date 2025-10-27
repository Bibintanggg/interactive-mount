interface UserInform {
    id: number
    name: string
    email: string
    role: "Pendaki Akut" | "Pendaki Okelah" | "Pendaki Pemula"
    profile: string
    created_at?: string
    updated_at?: string
}

export const UserData: UserInform[] = [
    {
        id: 1,
        name: "Bintang",
        email: "bibintangGG@gmail.com",
        role: "Pendaki Akut",
        profile: "/assets/file.jpg"
    }
]