type Props = {
    name: string;
    description: string;
    imageUrl: string;
};

export default function Card({ name, description, imageUrl }: Props) {
    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white w-full">
            <img src={imageUrl} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}