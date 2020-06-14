import Course from '@/pages/Course'

type CourseList = {
    id: string;
    type: string;
    name: string;
    totalPrice: string;
    amount: string;
    address: string;
}

let courseList :CourseList[]=[
    {
        id:"1",
        type:"React",
        name:"dvajs",
        totalPrice:'¥38',
        amount:"999",
        address:"Https://ke.qq.com/course/464697?tuin=c9304a42"
    },
    {
        id:"2",
        type:"React",
        name:"dvajs",
        totalPrice:'¥38',
        amount:"999",
        address:"Https://ke.qq.com/course/464697?tuin=c9304a42"
    },
    {
        id:"3",
        type:"React",
        name:"dvajs",
        totalPrice:'¥38',
        amount:"999",
        address:"Https://ke.qq.com/course/464697?tuin=c9304a42"
    },
    {
        id:"4",
        type:"React",
        name:"dvajs",
        totalPrice:'¥38',
        amount:"999",
        address:"Https://ke.qq.com/course/464697?tuin=c9304a42"
    },
    {
        id:"5",
        type:"React",
        name:"dvajs",
        totalPrice:'¥38',
        amount:"999",
        address:"Https://ke.qq.com/course/464697?tuin=c9304a42"
    },
];


export default{
    "/api/courseList":courseList
}