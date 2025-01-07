import Card from './Card';
import { useEffect, useState } from "react";


type Props = {};
type Person = {
    name: string;
    description: string;
    Image: string;
}

export default function PeopleContainer({ }: Props) {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        fetch("http://10.115.1.33:8055/items/people")
            .then((response) => response.json().then((data: any) => {
                setPeople(data.data);

            })
            );
    }, []);
    console.log("people", people);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 justify-center bg-green-900 p-6 gap-4">
            {people.map((person: Person) => {
                return (

                    <Card
                        name={person.name}
                        description={person.description}
                        imageUrl={
                            "http://10.115.1.33:8055/assets/" + person.Image
                        } />
                );
            })}
        </div>

    );
}