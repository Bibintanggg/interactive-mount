import { Target, Calendar } from 'lucide-react';

export type CardProps = {
    id?: number
    title: string, 
    icon: React.ReactNode, 
    reach: number
}

export const CardData: CardProps[] = [
    {
        id: 1,
        title: "Reach",
        icon: <Target/>,
        reach: 800
    },
    {
        id: 2,
        title: "Upcoming Plans",
        icon: <Calendar/>,
        reach: 800
    },
]