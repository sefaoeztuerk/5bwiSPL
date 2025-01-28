import { useState, useEffect } from "react";
import supabase from "./SupabaseClient";

interface Aufgabe {
    id: number;
    Fach: string;
    Beschreibung: string;
}

function SupabasePage() {
    const [aufgaben, setAufgaben] = useState<Aufgabe[]>([]);
    const [search, setSearch] = useState("");
    const [newFach, setNewFach] = useState("");
    const [newBeschreibung, setNewBeschreibung] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchAufgaben = async () => {
            const { data, error } = await supabase
                .from("Aufgaben")
                .select("id, Fach, Beschreibung");

            if (error) {
                console.error("Fehler beim Abrufen der Aufgaben:", error);
            } else {
                setAufgaben(data || []);
            }

        };

        fetchAufgaben();
    }, []);

    const filteredAufgaben = aufgaben.filter((aufgabe) =>
        aufgabe.Fach.toLowerCase().includes(search.toLowerCase()) ||
        aufgabe.Beschreibung.toLowerCase().includes(search.toLowerCase())
    );

    const hasSearchResults = search.length > 0 && filteredAufgaben.length > 0;

    const handleAddAufgabe = async () => {
        if (newFach && newBeschreibung) {
            const { data, error } = await supabase
                .from("Aufgaben")
                .insert([{ Fach: newFach, Beschreibung: newBeschreibung }]);

            if (error) {
                console.error("Fehler beim Hinzufügen der Aufgabe:", error);
            } else {
                setAufgaben([...aufgaben, ...data]);
                setNewFach("");
                setNewBeschreibung("");
                setShowForm(false);
            }
        }
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="p-10 bg-green-200">
            <h1 className="text-2xl font-bold mb-4">Hausaufgaben</h1>

            { }
            <input
                type="text"
                placeholder="Suche nach Fach oder Beschreibung"
                className="p-2 mb-4 border border-green-800 rounded"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target?.value ?? "")}
            />

            { }
            <button
                onClick={toggleShowAll}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                {showAll ? "Gefilterte Aufgaben anzeigen" : "Alle Aufgaben anzeigen"}
            </button>

            { }
            <button
                onClick={toggleForm}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            >
                Aufgabe hinzufügen
            </button>

            { }
            {showForm && (
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Fach"
                        className="p-2 border border-green-800 rounded mb-2"
                        value={newFach}
                        onChange={(e) => setNewFach(e.target.value)}
                    />
                    <textarea
                        placeholder="Beschreibung"
                        className="p-2 border border-green-800 rounded mb-2 w-full"
                        value={newBeschreibung}
                        onChange={(e) => setNewBeschreibung(e.target.value)}
                    />
                    <button
                        onClick={handleAddAufgabe}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Aufgabe hinzufügen
                    </button>
                </div>
            )}

            { }
            {showAll ? (
                <table className="table-auto w-full border-collapse border border-green-800">
                    <thead>
                        <tr>
                            <th className="border border-green-800 px-4 py-2">Fach</th>
                            <th className="border border-green-800 px-4 py-2">Beschreibung</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aufgaben.map((aufgabe) => (
                            <tr key={aufgabe.id}>
                                <td className="border border-green-800 px-4 py-2">{aufgabe.Fach}</td>
                                <td className="border border-green-800 px-4 py-2">{aufgabe.Beschreibung}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : hasSearchResults ? (
                <table className="table-auto w-full border-collapse border border-green-800">
                    <thead>
                        <tr>
                            <th className="border border-green-800 px-4 py-2">Fach</th>
                            <th className="border border-green-800 px-4 py-2">Beschreibung</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAufgaben.map((aufgabe) => (
                            <tr key={aufgabe.id}>
                                <td className="border border-green-800 px-4 py-2">{aufgabe.Fach}</td>
                                <td className="border border-green-800 px-4 py-2">{aufgabe.Beschreibung}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                search.length > 0 && (
                    <p className="text-red-500">Keine Aufgaben gefunden, die zu deiner Suche passen.</p>
                )
            )}
        </div>
    );
}

export default SupabasePage;
