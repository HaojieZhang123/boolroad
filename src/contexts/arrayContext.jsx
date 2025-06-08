import { createContext, useContext, useState } from "react";

const tripArray = [
    {
        id: 1,
        destination: 'Londra',
        trip_name: "London Trip",
        start: "2025/06/10",
        end: "2025/06/20",
        travelers: [
            { id: 1, name: "Luca", surname: "Rossi", phone: "+39 3451234567", email: "luca.rossi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Giulia", surname: "Verdi", phone: "+39 3462345678", email: "giulia.verdi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Marco", surname: "Bianchi", phone: "+39 3473456789", email: "marco.bianchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Elena", surname: "Neri", phone: "+39 3484567890", email: "elena.neri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Francesco", surname: "Gialli", phone: "+39 3495678901", email: "francesco.gialli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Chiara", surname: "Blu", phone: "+39 3456789012", email: "chiara.blu@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Andrea", surname: "Marrone", phone: "+39 3467890123", email: "andrea.marrone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Sara", surname: "Ferri", phone: "+39 3478901234", email: "sara.ferri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Davide", surname: "Costa", phone: "+39 3489012345", email: "davide.costa@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Laura", surname: "Moretti", phone: "+39 3490123456", email: "laura.moretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Alessandro", surname: "Romano", phone: "+39 3452345678", email: "alessandro.romano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Martina", surname: "Gallo", phone: "+39 3463456789", email: "martina.gallo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Simone", surname: "De Luca", phone: "+39 3474567890", email: "simone.deluca@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Roberta", surname: "Greco", phone: "+39 3485678901", email: "roberta.greco@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Matteo", surname: "Lombardi", phone: "+39 3496789012", email: "matteo.lombardi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 2,
        destination: "Parigi",
        trip_name: "La Citta' delle Luci",
        start: "2025/06/25",
        end: "2025/07/05",
        travelers: [
            { id: 1, name: "Anna", surname: "Silvestri", phone: "+39 3451112233", email: "anna.silvestri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Emanuele", surname: "Piras", phone: "+39 3462223344", email: "emanuele.piras@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Ilaria", surname: "Venturi", phone: "+39 3473334455", email: "ilaria.venturi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Gabriele", surname: "Longo", phone: "+39 3484445566", email: "gabriele.longo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Vittoria", surname: "Caruso", phone: "+39 3495556677", email: "vittoria.caruso@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Lorenzo", surname: "Fontana", phone: "+39 3456667788", email: "lorenzo.fontana@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Federica", surname: "Marchetti", phone: "+39 3467778899", email: "federica.marchetti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Tommaso", surname: "Bianco", phone: "+39 3478889900", email: "tommaso.bianco@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Eleonora", surname: "Giuliani", phone: "+39 3489990011", email: "eleonora.giuliani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Pietro", surname: "Serra", phone: "+39 3490001122", email: "pietro.serra@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Carla", surname: "Martini", phone: "+39 3451239876", email: "carla.martini@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Riccardo", surname: "Bassi", phone: "+39 3462340987", email: "riccardo.bassi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Noemi", surname: "Colombo", phone: "+39 3473451098", email: "noemi.colombo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Daniele", surname: "Fabbri", phone: "+39 3484562109", email: "daniele.fabbri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Lucia", surname: "Conti", phone: "+39 3495673210", email: "lucia.conti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 3,
        destination: "Bucarest",
        trip_name: "La piccola Parigi",
        start: "2025/07/10",
        end: "2025/07/20",
        travelers: [
            { id: 1, name: "Giorgia", surname: "Rinaldi", phone: "+39 3451122334", email: "giorgia.rinaldi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Mauro", surname: "Barbieri", phone: "+39 3462233445", email: "mauro.barbieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Silvia", surname: "Ferretti", phone: "+39 3473344556", email: "silvia.ferretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Alberto", surname: "Grassi", phone: "+39 3484455667", email: "alberto.grassi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Beatrice", surname: "Pellegrini", phone: "+39 3495566778", email: "beatrice.pellegrini@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Edoardo", surname: "Sanna", phone: "+39 3456677889", email: "edoardo.sanna@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Isabella", surname: "Testa", phone: "+39 3467788990", email: "isabella.testa@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Giovanni", surname: "Leone", phone: "+39 3478899001", email: "giovanni.leone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Alice", surname: "D'Amico", phone: "+39 3489900112", email: "alice.damico@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Fabio", surname: "Ricci", phone: "+39 3490011223", email: "fabio.ricci@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Marina", surname: "Pagani", phone: "+39 3450022334", email: "marina.pagani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Stefano", surname: "Morelli", phone: "+39 3461133445", email: "stefano.morelli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Veronica", surname: "Negri", phone: "+39 3472244556", email: "veronica.negri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Cristiano", surname: "Sereni", phone: "+39 3483355667", email: "cristiano.sereni@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Nadia", surname: "Riva", phone: "+39 3494466778", email: "nadia.riva@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 4,
        destination: "Dubai",
        trip_name: "Citta' dell'oro",
        start: "2025/07/25",
        end: "2025/08/05",
        travelers: [
            { id: 1, name: "Ludovica", surname: "Bellini", phone: "+39 3455566778", email: "ludovica.bellini@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Enrico", surname: "Palmieri", phone: "+39 3466677889", email: "enrico.palmieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Valentina", surname: "Fiore", phone: "+39 3477788990", email: "valentina.fiore@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Dario", surname: "Gentile", phone: "+39 3488899001", email: "dario.gentile@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Serena", surname: "Vitali", phone: "+39 3499900112", email: "serena.vitali@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Claudio", surname: "Moro", phone: "+39 3451011121", email: "claudio.moro@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Bianca", surname: "Fioretti", phone: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Omar", surname: "Barone", phone: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Francesca", surname: "Sartori", phone: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Luca", surname: "Marchi", phone: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Paola", surname: "Giordano", phone: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Sabrina", surname: "Parisi", phone: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 5,
        destination: "Los Angeles",
        trip_name: "La citta' degli Angeli",
        start: "2025/08/10",
        end: "2025/08/20",
        travelers: [
            { id: 1, name: "Massimo", surname: "Fiocchi", phone: "+39 3453031323", email: "massimo.fiocchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Monica", surname: "Spina", phone: "+39 3463132334", email: "monica.spina@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Ivan", surname: "Ferrara", phone: "+39 3473233345", email: "ivan.ferrara@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Barbara", surname: "Amato", phone: "+39 3483334356", email: "barbara.amato@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Samuele", surname: "Coli", phone: "+39 3493435367", email: "samuele.coli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Bianca", surname: "Fioretti", phone: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Omar", surname: "Barone", phone: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Francesca", surname: "Sartori", phone: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Luca", surname: "Marchi", phone: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Paola", surname: "Giordano", phone: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 16, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 17, name: "Sabrina", surname: "Parisi", phone: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 6,
        destination: "New York",
        trip_name: "La Grande Mela",
        start: "2025/08/25",
        end: "2025/09/05",
        travelers: [
            { id: 1, name: "Angela", surname: "Valle", phone: "+39 3454142434", email: "angela.valle@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Gianluca", surname: "Ferraro", phone: "+39 3464243445", email: "gianluca.ferraro@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Melissa", surname: "De Santis", phone: "+39 3474344456", email: "melissa.desantis@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Renato", surname: "Parodi", phone: "+39 3484445467", email: "renato.parodi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Clara", surname: "Romani", phone: "+39 3494546478", email: "clara.romani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Bianca", surname: "Fioretti", phone: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Omar", surname: "Barone", phone: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Francesca", surname: "Sartori", phone: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Luca", surname: "Marchi", phone: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Paola", surname: "Giordano", phone: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 16, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 17, name: "Sabrina", surname: "Parisi", phone: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 7,
        destination: "Roma",
        trip_name: "La Citta' Eterna",
        start: "2025/09/10",
        end: "2025/09/20",
        travelers: [
            { id: 1, name: "Sandro", surname: "Luciani", phone: "+39 3454647484", email: "sandro.luciani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Tatiana", surname: "Marchese", phone: "+39 3464748495", email: "tatiana.marchese@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Michele", surname: "Palumbo", phone: "+39 3474849506", email: "michele.palumbo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Debora", surname: "Fiorelli", phone: "+39 3484950517", email: "debora.fiorelli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Stefania", surname: "Grechi", phone: "+39 3495051528", email: "stefania.grechi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Bianca", surname: "Fioretti", phone: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Omar", surname: "Barone", phone: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Francesca", surname: "Sartori", phone: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Luca", surname: "Marchi", phone: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Paola", surname: "Giordano", phone: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 15, name: "Sabrina", surname: "Parisi", phone: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 8,
        destination: "Vienna",
        trip_name: "La citta' dei Palazzi",
        start: "2025/09/25",
        end: "2025/10/05",
        travelers: [
            { id: 1, name: "Cristina", surname: "Valenti", phone: "+39 3455152535", email: "cristina.valenti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 2, name: "Maurizio", surname: "Bruni", phone: "+39 3465253546", email: "maurizio.bruni@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 3, name: "Patrizia", surname: "De Rosa", phone: "+39 3475354557", email: "patrizia.derosa@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 4, name: "Giuseppe", surname: "Mauri", phone: "+39 3485455568", email: "giuseppe.mauri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 5, name: "Alina", surname: "Coppola", phone: "+39 3495556579", email: "alina.coppola@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 6, name: "Bianca", surname: "Fioretti", phone: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 7, name: "Omar", surname: "Barone", phone: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 8, name: "Francesca", surname: "Sartori", phone: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 9, name: "Luca", surname: "Marchi", phone: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 10, name: "Paola", surname: "Giordano", phone: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 11, name: "Nicola", surname: "Sorrentino", phone: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 12, name: "Caterina", surname: "Ruggieri", phone: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 13, name: "Antonio", surname: "Gatti", phone: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { id: 14, name: "Sabrina", surname: "Parisi", phone: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    }
];

const ArrayContext = createContext();

const ArrayProvider = ({ children }) => {
    const [array, setArray] = useState(tripArray);
    return (
        <ArrayContext.Provider value={{ array, setArray }}>
            {children}
        </ArrayContext.Provider>
    );
};



const useArray = () => {
    const context = useContext(ArrayContext);
    return context;
}

export { ArrayProvider, useArray }
