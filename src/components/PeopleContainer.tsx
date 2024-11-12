import Card from './Card';



export default function PeopleContainer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 justify-center bg-green-900 p-6 gap-4">
            <Card name="Diego Zechner" description="Lorem ipsum dolor sit amet." imageUrl="https://picsum.photos/200/300" />
            <Card name="Person 2" description="Lorem ipsum dolor sit amet." imageUrl="https://picsum.photos/200/300" />
            <Card name="Person 3" description="Lorem ipsum dolor sit amet." imageUrl="https://picsum.photos/200/300" />
            <Card name="Person 4" description="Lorem ipsum dolor sit amet." imageUrl="https://picsum.photos/200/300" />
            <Card name="Person 5" description="Lorem ipsum dolor sit amet." imageUrl="https://picsum.photos/200/300" />
            <Card name="Person 6" description="Lorem ipsum dolor sit amet." imageUrl="https://picsum.photos/200/300" />
        </div>
    );
}