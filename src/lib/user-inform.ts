interface UserInform {
    id: number
    name: string
    email: string
    role: "Pendaki Akut" | "Pendaki Okelah" | "Pendaki Pemula"
    profile: string
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