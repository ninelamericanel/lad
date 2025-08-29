
const slides = [
    {
        id: 1,
        title: "1",
        photo: 1,
    },
    {
        id: 2,
        title: "2",
        photo: 2,
    },
    {
        id: 3,
        title: "3",
        photo: 3,
    },
    {
        id: 4,
        title: "4",
        photo: 4,
    }
]


export const Slider = () => {
    return slides.map((item) => <div>
        <p>{item.title}</p>
        {/* <img src={item.photo} /> */}
    </div>)
}

