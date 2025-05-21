const books = [
    // Biography
    {
        id: '1',
        title: 'Steve Jobs',
        author: ' Walter Isaacson',
        description: 'A story of the Jazz Age in the United States, focusing on Jay Gatsby\'s obsession with the beautiful Daisy Buchanan.',
        rating: 4.4,
        category: ' Biography',
    },
    {
        id: '2',
        title: 'Becoming',
        author: ' Michelle Obama',
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother and the Party.',
        rating: 4.7,
        category: ' Biography',
    },
    {
        id: '3',
        title: 'Long Walk to Freedom',
        author: 'Nelson Mandela',
        description: 'A story of love and social standing set in the early 19th century English countryside.',
        rating: 4.8,
        category: ' Biography',
    },
    {
        id: '4',
        title: 'The Diary of a Young Girl',
        author: 'Anne Frank',
        description: 'A young man, Holden Caulfield, reflects on his troubled adolescence and alienation from society.',
        rating: 4.0,
        category: ' Biography',
    },
    {
        id: '5',
        title: 'Einstein: His Life and Universe',
        author: 'Walter Isaacson',
        description: 'Bilbo Baggins goes on an unexpected journey with dwarves to reclaim a lost kingdom.',
        rating: 4.6,
        category: ' Biography',
    },

    {
        id: '7',
        title: 'Into the Wild',
        author: 'Jon Krakauer',
        description: 'A memoir of a woman who grows up in a strict, survivalist family and eventually escapes to find an education.',
        rating: 4.7,
        category: 'Travel',
    },
    {
        id: '8',
        title: 'Eat, Pray, Love',
        author: 'Elizabeth Gilbert',
        description: 'The memoir of former First Lady Michelle Obama, detailing her life story from childhood to the White House.',
        rating: 4.9,
        category: 'Travel',
    },
    {
        id: '9',
        title: 'The Art of Travel',
        author: 'Alain de Botton',
        description: 'The story of Henrietta Lacks and how her cells were used without her knowledge or consent to advance science.',
        rating: 4.6,
        category: 'Travel',
    },
  

    // Cook-Books
    {
        id: '11',
        title: 'Salt, Fat, Acid, Heat',
        author: 'Samin Nosrat',
        description: 'A science fiction epic set on the desert planet Arrakis, focusing on politics, religion, and ecology.',
        rating: 4.7,
        category: 'Cook-Books',
    },
    {
        id: '12',
        title: 'The Joy of Cooking',
        author: 'Irma S. Rombauer',
        description: 'A young boy, Ender Wiggin, is trained to lead humanity in a war against an alien species.',
        rating: 4.6,
        category: 'Cook-Books',
    },
    {
        id: '13',
        title: 'Plenty',
        author: ' Yotam Ottolenghi',
        description: 'Set on the planet Gethen, this novel explores gender and social structures through the eyes of a human envoy.',
        rating: 4.5,
        category: 'Cook-Books',
    },
    {
        id: '14',
        title: 'Mastering the Art of French Cooking',
        author: 'Julia Child',
        description: 'A hacker, Case, is hired for a final job in a world where cyberspace is a real, physical entity.',
        rating: 4.3,
        category: 'Cook-Books',
    },
    {
        id: '15',
        title: 'Jerusalem',
        author: 'Yotam Ottolenghi and Sami Tamimi',
        description: 'A Chinese scientist makes a discovery that brings humanity into contact with an alien civilization.',
        rating: 4.4,
        category: 'Cook-Books',
    },

    // Self-Help
    {
        id: '16',
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
        description: 'A young boy, Harry Potter, discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.',
        rating: 4.9,
        category: 'Self-Help',
    },
    {
        id: '17',
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        description: 'The story of Kvothe, an orphan who grows up to be a legendary figure, as told in his own words.',
        rating: 4.8,
        category: 'Self-Help',
    },
    
    {
        id: '19',
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        description: 'The story of a group of thieves in the city of Camorr, led by the charismatic and clever Locke Lamora.',
        rating: 4.6,
        category: 'Self-Help',
    },
    {
        id: '20',
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'The first book in the Stormlight Archive, exploring a world in constant conflict and the struggle for survival.',
        rating: 4.7,
        category: 'Self-Help',
    },

    // Psychology
    {
        id: '21',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        description: 'A journalist and a hacker team up to solve a decades-old disappearance of a young woman.',
        rating: 4.6,
        category: 'Psychology',
    },
    {
        id: '22',
        title: 'Blink',
        author: 'Malcolm Gladwell',
        description: 'A psychological thriller about a woman who goes missing and the dark secrets of her marriage.',
        rating: 4.7,
        category: 'Psychology',
    },
    {
        id: '23',
        title: 'The Man Who Mistook His Wife for a Hat',
        author: 'Oliver Sacks',
        description: 'A woman who shoots her husband in the face, then falls silent, becomes the subject of a therapist\'s investigation.',
        rating: 4.5,
        category: 'Psychology',
    },
    {
        id: '24',
        title: 'Emotional Intelligence',
        author: 'Daniel Goleman',
        description: 'A mystery revolving around a murder in a tight-knit community of mothers and their families.',
        rating: 4.4,
        category: 'Psychology',
    },
    {
        id: '25',
        title: 'Influence: The Psychology of Persuasion',
        author: 'Robert B. Cialdini',
        description: 'A woman who believes she has witnessed a crime from her window becomes entangled in the mystery.',
        rating: 4.3,
        category: 'Psychology',
    },
    {
        id: '01',
        title: 'Educated',
        author: 'Tara Westover',
        description:
            'A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.',
        rating: 4.7,
        category: ' Biography',
    },
    {
        id: '02',
        title: 'I Am Malala',
        author: 'Malala Yousafzai   ',
        description:
            'Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former love, Daisy Buchanan.',
        rating: 4.5,
        category: ' Biography',
    },
    // Non-Fiction
    {
        id: '03',
        title: 'In Patagonia',
        author: 'Bruce Chatwin',
        description:
            'An exploration of the history of humankind, from the Stone Age to the present day, focusing on key cognitive, agricultural, and scientific revolutions.',
        rating: 4.8,
        category: 'Travel',
    },
    {
        id: '04',
        title: 'A Walk in the Woods',
        author: 'Bill Bryson',
        description:
            'The writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.',
        rating: 4.9,
        category: 'Travel',
    },
    // Cook-Books
    {
        id: '05',
        title: 'The Flavor Bible',
        author: 'Karen Page and Andrew Dornenburg',
        description:
            'Set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs, it tells the story of young Paul Atreides, whose family accepts stewardship of the desert planet Arrakis, the only source of the valuable spice "melange".',
        rating: 4.7,
        category: 'Cook-Books',
    },
    {
        id: '06',
        title: 'Essentials of Classic Italian Cooking',
        author: 'Marcella Hazan',
        description:
            'An astronaut, Mark Watney, is presumed dead and left behind on Mars. He must rely on his ingenuity to find a way to signal to Earth that he is alive and survive until a potential rescue.',
        rating: 4.6,
        category: 'Cook-Books',
    },
    // Fantasy
    {
        id: '07',
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        description:
            'The first novel in A Song of Ice and Fire, a series of fantasy novels. It chronicles the violent dynastic struggles among the realm\'s noble families for control of the Iron Throne.',
        rating: 4.8,
        category: 'Self-Help',
    },
    {
        id: '08',
        title: "Man's Search for Meaning",
        author: ' Viktor E. Frankl',
        description:
            'The first-person story of Kvothe, a magically gifted young man who grows to be a notorious figure. It follows his early life in a troupe of traveling players, his years as an orphan in a crime-ridden city, and his daring entrance to a legendary school of magic.',
        rating: 4.9,
        category: 'Self-Help',
    },
    // Mystery
    {
        id: '09',
        title: 'Drive: The Surprising Truth About What Motivates Us',
        author: 'Daniel H. Pink',
        description:
            'Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker with a photographic memory.',
        rating: 4.5,
        category: 'Psychology',
    },
    {
        id: '10',
        title: 'Grit: The Power of Passion and Perseverance',
        author: 'Angela Duckworth',
        description:
            'Ten strangers are lured to an isolated island mansion off the Devon coast by a mysterious "U.N. Owen." One by one, they are accused of murder and then killed in a manner paralleling a sinister nursery rhyme.',
        rating: 4.7,
        category: 'Psychology',
    }

]
export default books;