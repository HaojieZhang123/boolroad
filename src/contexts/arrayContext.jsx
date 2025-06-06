import { createContext, useContext, useState } from "react";

const tripArray = [
    {
        id: 1,
        destination: 'Londra',
        trip_name: "Viaggio a Londra",
        inizio: "2025-06-10",
        fine: "2025-06-20",
        partecipanti: [
            { nome: "Luca", cognome: "Rossi", telefono: "+39 3451234567", email: "luca.rossi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Giulia", cognome: "Verdi", telefono: "+39 3462345678", email: "giulia.verdi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Marco", cognome: "Bianchi", telefono: "+39 3473456789", email: "marco.bianchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Elena", cognome: "Neri", telefono: "+39 3484567890", email: "elena.neri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Francesco", cognome: "Gialli", telefono: "+39 3495678901", email: "francesco.gialli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Chiara", cognome: "Blu", telefono: "+39 3456789012", email: "chiara.blu@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Andrea", cognome: "Marrone", telefono: "+39 3467890123", email: "andrea.marrone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Sara", cognome: "Ferri", telefono: "+39 3478901234", email: "sara.ferri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Davide", cognome: "Costa", telefono: "+39 3489012345", email: "davide.costa@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Laura", cognome: "Moretti", telefono: "+39 3490123456", email: "laura.moretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Alessandro", cognome: "Romano", telefono: "+39 3452345678", email: "alessandro.romano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Martina", cognome: "Gallo", telefono: "+39 3463456789", email: "martina.gallo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Simone", cognome: "De Luca", telefono: "+39 3474567890", email: "simone.deluca@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Roberta", cognome: "Greco", telefono: "+39 3485678901", email: "roberta.greco@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Matteo", cognome: "Lombardi", telefono: "+39 3496789012", email: "matteo.lombardi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 2,
        destination: "Parigi",
        trip_name: "Viaggio a Parigi",
        inizio: "2025-06-25",
        fine: "2025-07-05",
        partecipanti: [
            { nome: "Anna", cognome: "Silvestri", telefono: "+39 3451112233", email: "anna.silvestri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Emanuele", cognome: "Piras", telefono: "+39 3462223344", email: "emanuele.piras@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Ilaria", cognome: "Venturi", telefono: "+39 3473334455", email: "ilaria.venturi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Gabriele", cognome: "Longo", telefono: "+39 3484445566", email: "gabriele.longo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Vittoria", cognome: "Caruso", telefono: "+39 3495556677", email: "vittoria.caruso@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Lorenzo", cognome: "Fontana", telefono: "+39 3456667788", email: "lorenzo.fontana@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Federica", cognome: "Marchetti", telefono: "+39 3467778899", email: "federica.marchetti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Tommaso", cognome: "Bianco", telefono: "+39 3478889900", email: "tommaso.bianco@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Eleonora", cognome: "Giuliani", telefono: "+39 3489990011", email: "eleonora.giuliani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Pietro", cognome: "Serra", telefono: "+39 3490001122", email: "pietro.serra@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Carla", cognome: "Martini", telefono: "+39 3451239876", email: "carla.martini@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Riccardo", cognome: "Bassi", telefono: "+39 3462340987", email: "riccardo.bassi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Noemi", cognome: "Colombo", telefono: "+39 3473451098", email: "noemi.colombo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Daniele", cognome: "Fabbri", telefono: "+39 3484562109", email: "daniele.fabbri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Lucia", cognome: "Conti", telefono: "+39 3495673210", email: "lucia.conti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 3,
        destination: "Bucarest",
        trip_name: "Viaggio a Bucarest",
        inizio: "2025-07-10",
        fine: "2025-07-20",
        partecipanti: [
            { nome: "Giorgia", cognome: "Rinaldi", telefono: "+39 3451122334", email: "giorgia.rinaldi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Mauro", cognome: "Barbieri", telefono: "+39 3462233445", email: "mauro.barbieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Silvia", cognome: "Ferretti", telefono: "+39 3473344556", email: "silvia.ferretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Alberto", cognome: "Grassi", telefono: "+39 3484455667", email: "alberto.grassi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Beatrice", cognome: "Pellegrini", telefono: "+39 3495566778", email: "beatrice.pellegrini@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Edoardo", cognome: "Sanna", telefono: "+39 3456677889", email: "edoardo.sanna@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Isabella", cognome: "Testa", telefono: "+39 3467788990", email: "isabella.testa@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Giovanni", cognome: "Leone", telefono: "+39 3478899001", email: "giovanni.leone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Alice", cognome: "D'Amico", telefono: "+39 3489900112", email: "alice.damico@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Fabio", cognome: "Ricci", telefono: "+39 3490011223", email: "fabio.ricci@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Marina", cognome: "Pagani", telefono: "+39 3450022334", email: "marina.pagani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Stefano", cognome: "Morelli", telefono: "+39 3461133445", email: "stefano.morelli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Veronica", cognome: "Negri", telefono: "+39 3472244556", email: "veronica.negri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Cristiano", cognome: "Sereni", telefono: "+39 3483355667", email: "cristiano.sereni@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nadia", cognome: "Riva", telefono: "+39 3494466778", email: "nadia.riva@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 4,
        destination: "Dubai",
        trip_name: "Viaggio a Dubai",
        inizio: "2025-07-25",
        fine: "2025-08-05",
        partecipanti: [
            { nome: "Ludovica", cognome: "Bellini", telefono: "+39 3455566778", email: "ludovica.bellini@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Enrico", cognome: "Palmieri", telefono: "+39 3466677889", email: "enrico.palmieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Valentina", cognome: "Fiore", telefono: "+39 3477788990", email: "valentina.fiore@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Dario", cognome: "Gentile", telefono: "+39 3488899001", email: "dario.gentile@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Serena", cognome: "Vitali", telefono: "+39 3499900112", email: "serena.vitali@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Claudio", cognome: "Moro", telefono: "+39 3451011121", email: "claudio.moro@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Bianca", cognome: "Fioretti", telefono: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Omar", cognome: "Barone", telefono: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Francesca", cognome: "Sartori", telefono: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Luca", cognome: "Marchi", telefono: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Paola", cognome: "Giordano", telefono: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Sabrina", cognome: "Parisi", telefono: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 5,
        destination: "Los Angeles",
        trip_name: "Viaggio a Los Angeles",
        inizio: "2025-08-10",
        fine: "2025-08-20",
        partecipanti: [
            { nome: "Massimo", cognome: "Fiocchi", telefono: "+39 3453031323", email: "massimo.fiocchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Monica", cognome: "Spina", telefono: "+39 3463132334", email: "monica.spina@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Ivan", cognome: "Ferrara", telefono: "+39 3473233345", email: "ivan.ferrara@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Barbara", cognome: "Amato", telefono: "+39 3483334356", email: "barbara.amato@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Samuele", cognome: "Coli", telefono: "+39 3493435367", email: "samuele.coli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Bianca", cognome: "Fioretti", telefono: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Omar", cognome: "Barone", telefono: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Francesca", cognome: "Sartori", telefono: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Luca", cognome: "Marchi", telefono: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Paola", cognome: "Giordano", telefono: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Sabrina", cognome: "Parisi", telefono: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 6,
        destination: "New York",
        trip_name: "Viaggio a New York",
        inizio: "2025-08-25",
        fine: "2025-09-05",
        partecipanti: [
            { nome: "Angela", cognome: "Valle", telefono: "+39 3454142434", email: "angela.valle@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Gianluca", cognome: "Ferraro", telefono: "+39 3464243445", email: "gianluca.ferraro@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Melissa", cognome: "De Santis", telefono: "+39 3474344456", email: "melissa.desantis@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Renato", cognome: "Parodi", telefono: "+39 3484445467", email: "renato.parodi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Clara", cognome: "Romani", telefono: "+39 3494546478", email: "clara.romani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Bianca", cognome: "Fioretti", telefono: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Omar", cognome: "Barone", telefono: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Francesca", cognome: "Sartori", telefono: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Luca", cognome: "Marchi", telefono: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Paola", cognome: "Giordano", telefono: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Sabrina", cognome: "Parisi", telefono: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 7,
        destination: "Roma",
        trip_name: "Viaggio a Roma",
        inizio: "2025-09-10",
        fine: "2025-09-20",
        partecipanti: [
            { nome: "Sandro", cognome: "Luciani", telefono: "+39 3454647484", email: "sandro.luciani@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Tatiana", cognome: "Marchese", telefono: "+39 3464748495", email: "tatiana.marchese@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Michele", cognome: "Palumbo", telefono: "+39 3474849506", email: "michele.palumbo@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Debora", cognome: "Fiorelli", telefono: "+39 3484950517", email: "debora.fiorelli@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Stefania", cognome: "Grechi", telefono: "+39 3495051528", email: "stefania.grechi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Bianca", cognome: "Fioretti", telefono: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Omar", cognome: "Barone", telefono: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Francesca", cognome: "Sartori", telefono: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Luca", cognome: "Marchi", telefono: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Paola", cognome: "Giordano", telefono: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Sabrina", cognome: "Parisi", telefono: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
        ]
    },
    {
        id: 8,
        destination: "Vienna",
        trip_name: "Viaggio a Vienna",
        inizio: "2025-09-25",
        fine: "2025-10-05",
        partecipanti: [
            { nome: "Cristina", cognome: "Valenti", telefono: "+39 3455152535", email: "cristina.valenti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Maurizio", cognome: "Bruni", telefono: "+39 3465253546", email: "maurizio.bruni@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Patrizia", cognome: "De Rosa", telefono: "+39 3475354557", email: "patrizia.derosa@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Giuseppe", cognome: "Mauri", telefono: "+39 3485455568", email: "giuseppe.mauri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Alina", cognome: "Coppola", telefono: "+39 3495556579", email: "alina.coppola@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Bianca", cognome: "Fioretti", telefono: "+39 3461213141", email: "bianca.fioretti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Omar", cognome: "Barone", telefono: "+39 3471314151", email: "omar.barone@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Francesca", cognome: "Sartori", telefono: "+39 3481415161", email: "francesca.sartori@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Luca", cognome: "Marchi", telefono: "+39 3491516171", email: "luca.marchi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Paola", cognome: "Giordano", telefono: "+39 3451617181", email: "paola.giordano@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Nicola", cognome: "Sorrentino", telefono: "+39 3461718191", email: "nicola.sorrentino@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Caterina", cognome: "Ruggieri", telefono: "+39 3471819201", email: "caterina.ruggieri@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Antonio", cognome: "Gatti", telefono: "+39 3481920211", email: "antonio.gatti@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' },
            { nome: "Sabrina", cognome: "Parisi", telefono: "+39 3492021221", email: "sabrina.parisi@example.com", cf: "XXXXXXXXXXX", emergency: '123456789' }
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
