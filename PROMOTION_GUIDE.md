# How to Handle Promotions in the Timeline

## Overview

The Experience timeline now supports **multiple roles at the same company** to showcase promotions and career progression within an organization.

---

## Visual Design

When a company has multiple roles:
- ✅ **Green checkmark badge** appears next to each role title
- ✅ Company name and location shown once at the top
- ✅ Total time period displayed (e.g., "January 2022 – May 2023")
- ✅ Each role has its own title, date range, and highlights
- ✅ Roles separated by subtle dividers when expanded
- ✅ Most recent role listed first

---

## Data Structure

### Single Role (Current Format)
```javascript
{
  company: 'Company Name',
  location: 'City, ST (Remote/Onsite)',
  totalPeriod: 'Start Date – End Date',
  roles: [
    {
      title: 'Job Title',
      period: 'Start Date – End Date',
      highlights: [
        'Achievement 1',
        'Achievement 2',
      ],
    },
  ],
}
```

### Multiple Roles (Promotions)
```javascript
{
  company: 'SURVICE Engineering Company',
  location: 'Remote',
  totalPeriod: 'January 2022 – May 2023',  // Overall tenure
  roles: [
    // Most recent role FIRST
    {
      title: 'Software Developer',
      period: 'January 2023 – May 2023',
      highlights: [
        'Full-time responsibilities...',
        'Led projects...',
      ],
    },
    // Earlier role SECOND
    {
      title: 'Software Developer Intern',
      period: 'January 2022 – January 2023',
      highlights: [
        'Intern responsibilities...',
        'Learning experiences...',
      ],
    },
  ],
}
```

---

## Example: Your SURVICE Engineering Experience

```javascript
{
  company: 'SURVICE Engineering Company',
  location: 'Remote',
  totalPeriod: 'January 2022 – May 2023', // 1 year 4 months total
  roles: [
    {
      title: 'Software Developer',
      period: 'January 2023 – May 2023', // Promoted after 1 year
      highlights: [
        'Designed and developed an internal web application that helps government and industry users receive answers to their technical inquiries and connect with subject matter experts.',
        'Leveraged MySQL to make relational database schema changes, created RESTful API endpoints with Node.js and Express.',
        'Facilitated onboarding training for new team members.',
        'Regularly devised and implemented refactoring solutions.',
        'Pitched solutions to technical problems in documents written on Confluence.',
      ],
    },
    {
      title: 'Software Developer Intern',
      period: 'January 2022 – January 2023', // Started as intern
      highlights: [
        'Contributed to the development of internal web applications using Angular and Node.js.',
        'Gained hands-on experience with MySQL database design and RESTful API development.',
        'Collaborated with senior developers to implement new features and bug fixes.',
        'Participated in code reviews and learned best practices for software development.',
      ],
    },
  ],
}
```

---

## How It Looks

### Collapsed View
```
┌─────────────────────────────────────────────┐
│ ● SURVICE Engineering Company              │
│   📍 Remote  •  🗓️ January 2022 – May 2023 │
│                                             │
│   ✓ Software Developer                     │
│     January 2023 – May 2023                │
│                                             │
│   ✓ Software Developer Intern              │
│     January 2022 – January 2023            │
│                                             │
│   [Show More ▼]                            │
└─────────────────────────────────────────────┘
```

### Expanded View
```
┌─────────────────────────────────────────────┐
│ ● SURVICE Engineering Company              │
│   📍 Remote  •  🗓️ January 2022 – May 2023 │
│                                             │
│   ✓ Software Developer                     │
│     January 2023 – May 2023                │
│     ▸ Achievement 1                        │
│     ▸ Achievement 2                        │
│     ▸ Achievement 3                        │
│   ─────────────────────────────────────    │
│   ✓ Software Developer Intern              │
│     January 2022 – January 2023            │
│     ▸ Learning experience 1                │
│     ▸ Learning experience 2                │
│                                             │
│   [Show Less ▲]                            │
└─────────────────────────────────────────────┘
```

---

## Step-by-Step: Adding a Promotion

### 1. Locate Your Experience

Open [src/components/Experience.jsx](src/components/Experience.jsx:28-54)

### 2. Update the Company Entry

Change from single role to multiple roles:

**Before (Single Role):**
```javascript
{
  company: 'SURVICE Engineering Company',
  location: 'Remote',
  totalPeriod: 'May 2022 – May 2023',
  roles: [
    {
      title: 'Software Developer',
      period: 'May 2022 – May 2023',
      highlights: [
        'Did things...',
      ],
    },
  ],
}
```

**After (With Promotion):**
```javascript
{
  company: 'SURVICE Engineering Company',
  location: 'Remote',
  totalPeriod: 'January 2022 – May 2023',  // ⬅️ Update to full tenure
  roles: [
    {
      title: 'Software Developer',  // ⬅️ Current/most recent role
      period: 'January 2023 – May 2023',
      highlights: [
        'Full-time developer responsibilities...',
      ],
    },
    {
      title: 'Software Developer Intern',  // ⬅️ Add earlier role
      period: 'January 2022 – January 2023',
      highlights: [
        'Intern responsibilities...',
      ],
    },
  ],
}
```

### 3. Save and Test

```bash
npm start
```

Visit the experience section and click to expand SURVICE Engineering. You should see:
- ✅ Green checkmarks next to both roles
- ✅ Two separate role titles with periods
- ✅ Divider line between the roles
- ✅ All highlights organized by role

---

## Tips for Writing Highlights

### For the Promoted Role (Full-Time)
Focus on:
- Leadership and ownership
- Complex projects you led
- Impact on team/organization
- Mentoring others
- Strategic contributions

### For the Initial Role (Intern/Junior)
Focus on:
- Learning and growth
- Team collaboration
- Contribution to projects
- Skill development
- Foundation building

---

## Common Patterns

### Intern → Full-Time
```javascript
roles: [
  {
    title: 'Software Developer',
    period: 'January 2023 – May 2023',
    highlights: ['Led projects...', 'Mentored interns...'],
  },
  {
    title: 'Software Developer Intern',
    period: 'January 2022 – January 2023',
    highlights: ['Contributed to...', 'Learned...'],
  },
]
```

### Junior → Mid-Level
```javascript
roles: [
  {
    title: 'Software Engineer II',
    period: 'June 2023 – Present',
    highlights: ['Architected systems...', 'Led initiatives...'],
  },
  {
    title: 'Software Engineer I',
    period: 'January 2022 – June 2023',
    highlights: ['Developed features...', 'Collaborated...'],
  },
]
```

### Multiple Promotions
```javascript
roles: [
  {
    title: 'Senior Software Engineer',
    period: 'January 2024 – Present',
    highlights: ['...'],
  },
  {
    title: 'Software Engineer II',
    period: 'June 2023 – January 2024',
    highlights: ['...'],
  },
  {
    title: 'Software Engineer I',
    period: 'January 2022 – June 2023',
    highlights: ['...'],
  },
]
```

---

## Benefits of This Approach

1. **Shows Career Growth**: Visually demonstrates progression within a company
2. **Timeline Accuracy**: Total period reflects actual tenure
3. **Context for Recruiters**: Shows you earned promotions/trust
4. **Organized**: Each role's contributions are clearly separated
5. **Professional**: Green checkmarks subtly indicate advancement
6. **Flexible**: Works with any number of roles/promotions

---

## Current Implementation

Your timeline now shows:
1. **AWS** - Single role (Intern)
2. **SURVICE Engineering** - Two roles (Promoted from Intern to Developer)
3. **GWU Research** - Single role (Research Assistant)

The SURVICE entry demonstrates the promotion feature with:
- ✅ Green checkmarks
- ✅ Separate date ranges per role
- ✅ Distinct highlights for each position
- ✅ Clean visual separation

---

## Troubleshooting

### Checkmarks not showing?
Make sure `roles.length > 1` for the company.

### Wrong order?
List most recent role FIRST in the array.

### No divider between roles?
Check that `roleIdx < exp.roles.length - 1` logic is present.

### Total period wrong?
Update `totalPeriod` to span from first start date to last end date.

---

## Next Steps

Want to update your actual experience? Edit [src/components/Experience.jsx](src/components/Experience.jsx) and adjust the SURVICE entry with your real internship details!

```bash
# After editing
npm run build
npm run deploy
```

Your updated timeline will be live in 2-3 minutes! 🚀
