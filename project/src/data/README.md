# Data Structure Documentation

## Person Data (`personData.js`)

This file contains an array of 50 professional profiles with the following structure:

### Data Schema

```javascript
{
  id: number,           // Unique identifier
  name: string,         // Full name of the person
  occupation: string,   // Professional title/role
  rating: number,       // Rating from 1-5 (decimal supported)
  experience: string,   // Years of experience (e.g., "5 years")
  location: string,     // City/State location
  image: string,        // Emoji representation of the person
  skills: string[]      // Array of professional skills
}
```

### Example Entry

```javascript
{
  id: 1,
  name: "Sarah Johnson",
  occupation: "Software Engineer",
  rating: 4.8,
  experience: "5 years",
  location: "San Francisco",
  image: "👩‍💻",
  skills: ["React", "Node.js", "Python"]
}
```

### Usage

```javascript
import { personData } from './personData.js';

// Access all data
const allProfessionals = personData;

// Filter by occupation
const softwareEngineers = personData.filter(person => 
  person.occupation === "Software Engineer"
);

// Sort by rating
const topRated = personData.sort((a, b) => b.rating - a.rating);
```

### Data Categories

The dataset includes professionals from various industries:
- Technology (Software Engineers, Data Scientists, DevOps)
- Design (UX Designers, Graphic Designers, Interior Designers)
- Business (Marketing, Sales, Operations, HR)
- Healthcare (Doctors, Therapists, Administrators)
- Engineering (Mechanical, Civil, Network Engineers)
- Creative (Photographers, Chefs, Fashion Designers)
- Skilled Trades (Electricians, Plumbers, Carpenters)
- And many more...

### Features

- **50 diverse professionals** with realistic data
- **Consistent data structure** for easy filtering and sorting
- **Emoji avatars** for visual representation
- **Skill tags** for each professional
- **Geographic diversity** across different cities
- **Rating system** with decimal precision
- **Experience levels** ranging from 3-12 years 