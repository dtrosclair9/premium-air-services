import type { CityPage } from '../types'

// Each town page is written for that town. Distances are rough road estimates
// from research, always said as "about". No claims about past local jobs until
// Johnny gives us real ones.

export const cityPages: CityPage[] = [
  {
    slug: 'ac-repair-houma-la',
    service: 'ac-repair',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    title: 'Air Conditioning Repair in Houma, LA',
    description:
      'Need AC repair in Houma? Premium Air Services repairs home air conditioners in Houma, Bayou Cane, Bayou Blue and Gray, and also handles replacements. Call us.',
    h1: 'AC Repair in Houma, LA',
    eyebrow: 'Terrebonne Parish',
    intro: [
      'We repair home air conditioners across Houma, including Bayou Cane, Bayou Blue and Gray. Our base in Lockport is about 19 miles away.',
      'Terrebonne has its own mix of storm damage, older houses and mobile homes, and each one can change what is wrong with the AC.',
    ],
    sections: [
      {
        h2: 'Is my outdoor unit safe to run after high water?',
        body: [
          'Not if water reached it. Francine made landfall in Terrebonne Parish in September 2024, and low spots around Houma are always a concern in a storm like that. Look for a water line, mud on the coil or a shifted pad before you touch the thermostat.',
          'Wet electrical parts can damage the system and are a safety hazard, so leave it off until someone has checked them. Saltwater does the most harm, since it stays on the coil and controls after it dries.',
        ],
      },
      {
        h2: 'Why do mobile homes in Terrebonne have different AC problems?',
        body: [
          'Roughly one home in six or seven in the parish is a mobile home, and their ducts usually run under the floor. A torn belly or loose crossover duct can dump your cool air under the house, even when the AC itself works fine.',
          'We have a separate [mobile home AC page] on those problems. If one end of your home stays warm, that is a good place to start.',
        ],
      },
      {
        h2: 'What if my Houma home is older?',
        body: [
          'A lot of Houma homes are 40 years old or more. Many have had several AC systems over the years, sometimes on ducts that were never replaced. If you keep repairing the system and the house is still uncomfortable, check the ducts.',
          'A system old enough to use R-22 refrigerant is also worth thinking through if it develops a leak. Before paying for a big repair on one of those, ask about [replacing the system] too.',
        ],
      },
    ],
    included: [
      'AC not cooling or blowing warm',
      'Water leaking from the indoor unit',
      'Dead outdoor units and capacitors',
      'Storm checks',
      'Mobile home AC problems',
      'Repair or replace advice',
    ],
    nearby: ['Bayou Cane', 'Bayou Blue', 'Gray', 'Schriever', 'Bourg'],
    gallery: [],
    faqs: [
      { q: 'Do you come out to east Houma and Bayou Blue?', a: 'Yes. Both are within our service area.' },
      { q: 'Do you work in Bayou Cane and Gray too?', a: 'Yes. Both are part of the area we cover around Houma, even though Bayou Cane sits outside the city limits.' },
            { q: 'Do you also install new systems in Houma?', a: 'Yes. We have a separate page on AC installation and replacement in Houma, and a repair call can help you decide if a replacement makes more sense.' },
    ],
    cta: { heading: 'AC out in Houma?', text: 'We cover Houma, Bayou Cane, Bayou Blue and Gray.' },
  },
  {
    slug: 'ac-installation-houma-la',
    service: 'ac-installation',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    title: 'AC Installation & Replacement in Houma, LA',
    description:
      'Replacing an AC in Houma? Premium Air Services installs central air, heat pumps and mini splits in Houma, Bayou Cane and Bayou Blue. Call for a home quote.',
    h1: 'AC Installation & Replacement in Houma, LA',
    eyebrow: 'New systems in Terrebonne Parish',
    intro: [
      'We install new air conditioning systems in Houma, Bayou Cane, Bayou Blue and Gray.',
      'Central air, a heat pump or a mini split can each make sense, depending on your house.',
    ],
    sections: [
      {
        h2: 'Should I raise my new AC unit in Houma?',
        body: [
          'It depends on your lot and your flood risk. Many homes around Houma have outdoor units on stands or raised pads because of heavy rain and storm surge. A unit that sits low can be ruined by one bad flood.',
          'Your flood zone and any parish requirements also matter, so check those if you are replacing a unit after a storm. The stand needs to be solid and secured, and the unit needs room to get air.',
        ],
      },
      {
        h2: 'How do I choose a system for an older Terrebonne home?',
        body: [
          'Older homes often have less insulation, leakier windows and ducts that were sized for a different system. If your house was built in the 1970s or 1980s and the old unit always struggled, simply matching its size may not fix anything.',
          'It helps to think about where the house has changed. Added rooms, new windows or extra attic insulation can all change what size you need, and the ducts should be part of the conversation.',
        ],
      },
      {
        h2: 'Is a mini split a better fit for part of my Houma house?',
        body: [
          'For a converted garage, a new addition or a backyard shop, a mini split often makes more sense than extending old ductwork. It also keeps your main system from having to carry extra space.',
          'For the rest of the house, central air usually remains the simple choice when good ducts are already in place. Our [mini split page] goes over where they work and where they do not.',
        ],
      },
    ],
    included: [
      'Central AC replacement',
      'Heat pump systems',
      'Mini split systems',
      'Thermostat setup',
    ],
    nearby: ['Bayou Cane', 'Bayou Blue', 'Gray', 'Schriever'],
    gallery: ['/images/work/condenser-on-stand-white-siding.jpg'],
    faqs: [
            { q: 'How do I know if my old unit was ruined by a flood?', a: 'If water reached the electrical parts or the base of the unit, have it inspected before you run it. Saltwater is especially hard on coils and controls.' },
      { q: 'Can I put a new AC on my old ductwork?', a: 'Sometimes. It depends on the condition and size of the ducts. Old flex duct that is torn or undersized can hold back a new system.' },
      { q: 'Do you install heat pumps in Houma?', a: 'Yes. Heat pumps are a common choice for all-electric homes here because of our mild winters.' },
    ],
    cta: { heading: 'Replacing an AC in Houma?', text: 'We can quote your home in Houma, Bayou Cane, Bayou Blue or Gray.' },
  },
  {
    slug: 'ac-repair-raceland-la',
    service: 'ac-repair',
    city: 'Raceland',
    parish: 'Lafourche Parish',
    title: 'Air Conditioning Repair in Raceland, LA',
    description:
      'AC trouble in Raceland? Premium Air Services is based about 8 miles away in Lockport and repairs home AC systems in Raceland, Mathews and Gheens. Call us.',
    h1: 'AC Repair in Raceland, LA',
    eyebrow: 'Lafourche Parish',
    intro: [
      'Raceland is one of the closest towns to Lockport, about 8 miles up the road. We repair home air conditioners here and in Mathews and Gheens.',
      'Most calls are for an AC that stopped cooling, started leaking or began making a new noise.',
    ],
    sections: [
      {
        h2: 'Why does my Raceland house feel sticky on wet days?',
        body: [
          'High humidity makes your system work harder, since part of its job is pulling water out of the air. A house with wet ground around it, a damp crawl space or a leaky duct can bring in more moisture than the AC can keep up with.',
          'If your house is on piers, check under it for standing water and torn ducts. If your house feels sticky even when the thermostat says the right temperature, moisture may be the real problem.',
        ],
      },
      {
        h2: 'What about outdoor units near fields and yards?',
        body: [
          'Cane dust, grass clippings and cottonwood fluff can coat the outdoor coil until the unit struggles to shed heat. It can happen slowly, and you may only notice when the first hot week arrives.',
          'With the power off, you can rinse the coil gently with a garden hose. If the coil looks packed or the unit is still running hot, have it cleaned properly. Our [maintenance page] lists what else to check.',
        ],
      },
      {
        h2: 'What should I tell you when I call from Raceland?',
        body: [
          'Let us know your road, the age of the system if you know it, and what you have noticed. Things like ice on the lines, water in the closet, a hum from the outdoor unit or a tripped breaker all help us understand what is going on.',
        ],
      },
    ],
    included: [
      'AC not cooling',
      'Weak airflow',
      'Dirty outdoor coils',
      'Clogged drain lines',
      'Electrical parts',
      'Humidity problems',
    ],
    nearby: ['Mathews', 'Gheens', 'Lockport', 'Des Allemands'],
    gallery: [],
    faqs: [
      { q: 'Do you cover Mathews and Gheens?', a: 'Yes. Both are in our service area.' },
      { q: 'Why does my house feel sticky even with the AC on?', a: 'Possible causes include an oversized system, leaky ducts, dirty coils or a fan set to run all the time. It helps to set the fan to auto first, then call if it stays sticky.' },
      { q: 'Should I hose off my outdoor unit?', a: 'A gentle rinse with the power off is fine. Keep the water pressure low so you do not bend the fins.' },
    ],
    cta: { heading: 'Need AC help in Raceland?', text: 'We are close by in Lockport.' },
  },
  {
    slug: 'ac-repair-larose-la',
    service: 'ac-repair',
    city: 'Larose',
    parish: 'Lafourche Parish',
    title: 'Air Conditioning Repair in Larose, LA',
    description:
      'Need your AC fixed in Larose? Premium Air Services repairs home air conditioners in Larose and Cut Off from our base in Lockport, just up the bayou. Call us.',
    h1: 'AC Repair in Larose, LA',
    eyebrow: 'Along Bayou Lafourche',
    intro: [
      'Larose sits where Bayou Lafourche meets the Intracoastal Waterway, about 13 miles down the bayou from Lockport. We repair home air conditioners here and in nearby Cut Off.',
      'Being this close to the water, and having to leave for storms, both affect how an AC holds up.',
    ],
    sections: [
      {
        h2: 'How does being close to the water affect an AC in Larose?',
        body: [
          'Moist air and salt in the breeze both wear on outdoor units over time. You may see rust on the cabinet, screws and base pan, or a coil that starts to look flaky. It often creeps up slowly, then shows itself as a leak or a failed part.',
          'A gentle freshwater rinse on the coil with the power off can help slow it down. If your unit already shows heavy rust, ask us to look at the coil and electrical parts when we are out.',
        ],
      },
      {
        h2: 'What should I do with my AC when evacuating?',
        body: [
          'Before you leave for a storm, turn the system off at the thermostat and at the breaker. That helps protect it from power surges. Move loose items away from the outdoor unit, since they can become projectiles in high wind.',
          'When you come back, look the unit over before you turn the breaker back on. A closed-up house with no air gets humid fast, so try to get it cooling as soon as it is safe.',
        ],
      },
      {
        h2: 'Why does my AC keep tripping the breaker?',
        body: [
          'A breaker that trips repeatedly may point to a failing compressor, a bad fan motor, a short or a weak breaker. Resetting it once is fine, but do not keep doing it. Repeated resets can make the damage worse.',
          'Leave it off. It helps to know whether the breaker trips right away or after the system has run for a while.',
        ],
      },
    ],
    included: [
      'AC not cooling',
      'Rust and coil damage',
      'Tripped breakers',
      'Check-ups after storms',
      'Drain line clogs',
      'Mini split repair',
    ],
    nearby: ['Cut Off', 'Galliano', 'Lockport', 'Bourg'],
    gallery: [],
    faqs: [
      { q: 'Do you work in Cut Off?', a: 'Yes. Cut Off is just down the road from Larose and is part of the area we cover.' },
      { q: 'Should I cover my outdoor unit before a storm?', a: 'A cover is not usually necessary, and trapping moisture can cause its own problems. Moving loose objects and turning off the power are the more useful steps.' },
      { q: 'Can a rusty outdoor unit be saved?', a: 'Surface rust on the cabinet is mostly cosmetic. A rusted-through base or corroded coil is more serious, and the unit’s age helps decide if a repair is worth it.' },
    ],
    cta: { heading: 'AC trouble in Larose?', text: 'We work in Larose and Cut Off.' },
  },
  {
    slug: 'ac-repair-galliano-la',
    service: 'ac-repair',
    city: 'Galliano',
    parish: 'Lafourche Parish',
    title: 'Air Conditioning Repair in Galliano, LA',
    description:
      'AC not keeping up in Galliano? Premium Air Services repairs home AC systems in Galliano, Cut Off and Golden Meadow, all along lower Lafourche. Call to schedule.',
    h1: 'AC Repair in Galliano, LA',
    eyebrow: 'Lower Lafourche',
    intro: [
      'We repair home air conditioners in Galliano, Cut Off and Golden Meadow, about 24 miles down the bayou from Lockport.',
      'Lower Lafourche gets more wind and salt than most of the parish, and outdoor units show it.',
    ],
    sections: [
      {
        h2: 'How do I get my AC ready after a long power outage?',
        body: [
          'After Ida, parts of Lafourche went weeks without power, and many homes sat hot and closed up. When your power comes back, look over the outdoor unit and the line set before you turn on the AC.',
          'Check for a shifted unit, torn insulation on the lines, and damage to the disconnect box. If everything looks okay, start it and listen. A system that hums, trips the breaker or fails to cool should be turned back off until it is checked.',
        ],
      },
      {
        h2: 'Should my outdoor unit be up on a stand down here?',
        body: [
          'Many homes on lower Lafourche are raised, and outdoor units often are too. A unit on a platform has less exposure to water, but it should be well secured against wind, and you should be able to safely reach it for service.',
          'Check the stand as well as the unit after a storm. Fix loose straps or a rusted frame before the next storm.',
        ],
      },
      {
        h2: 'Why does my camp or raised house feel humid?',
        body: [
          'A home that sits empty part of the time can get sticky quickly with the AC off. Raised floors with torn ducts can also pull humid air in. Before a long absence, ask about a safe thermostat setting so moisture does not build up.',
          'For small spaces and additions, a [mini split] may make more sense than running ducts under a raised floor.',
        ],
      },
    ],
    included: [
      'AC not cooling',
      'Storm and outage checks',
      'Rusted coils and cabinets',
      'Raised unit problems',
      'Ducts under raised floors',
      'Mini split repair',
    ],
    nearby: ['Cut Off', 'Golden Meadow', 'Larose'],
    gallery: [],
    faqs: [
      { q: 'Do you go as far as Golden Meadow?', a: 'Yes. Golden Meadow is within our service area. Give us your address when you call.' },
      { q: 'Will salt air shorten the life of my AC?', a: 'It can, especially close to open water. Rinsing the coil gently and getting rust looked at early can help you get more years from the unit.' },
      { q: 'What thermostat setting should I use for an empty house?', a: 'Many people leave the AC set a few degrees warmer rather than off, so the house still gets some moisture removal. The right setting depends on your house and how long you will be gone.' },
      { q: 'Can you check my AC before storm season?', a: 'Yes. Spring is a good time, before hurricane season starts.' },
    ],
    cta: { heading: 'Live down the bayou?', text: 'We cover Galliano, Cut Off and Golden Meadow.' },
  },
  {
    slug: 'ac-repair-thibodaux-la',
    service: 'ac-repair',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    title: 'Air Conditioning Repair in Thibodaux, LA',
    description:
      'Need AC repair in Thibodaux? Premium Air Services repairs home air conditioners in Thibodaux, Lafourche Crossing and Schriever. Call us to schedule.',
    h1: 'AC Repair in Thibodaux, LA',
    eyebrow: 'Up the bayou from Lockport',
    intro: [
      'We repair home air conditioners in Thibodaux, Lafourche Crossing and Schriever. Thibodaux is about 23 miles from Lockport.',
      'Thibodaux has a lot of older houses near downtown and rentals around Nicholls State, and each has its own common AC problems.',
    ],
    sections: [
      {
        h2: 'What AC problems are common in older Thibodaux homes?',
        body: [
          'Older houses were not built around central air, so ducts were often added later wherever they would fit. Long runs, tight turns and a return that is too small can leave back rooms warm and make the system work harder.',
          'If your home has high ceilings or lots of windows, the system may also be fighting more heat than its size suggests. [Ductwork] is worth a look before you assume the AC itself has failed.',
        ],
      },
      {
        h2: 'What should landlords near Nicholls State know?',
        body: [
          'Rentals tend to run filters too long, and a clogged filter leads to frozen coils and service calls. Giving tenants a filter schedule, or changing filters yourself, prevents a lot of them. A drain line flush before the fall semester also helps.',
        ],
      },
      {
        h2: 'What should I do if my AC stops on a hot afternoon?',
        body: [
          'Check the filter, the thermostat and the breaker first. If there is ice on the lines, turn cooling off and run the fan so it can thaw. If the outdoor fan is not spinning, turn the system off and call us.',
          'If only part of your house is warm, check whether the system is still running and how much air is coming out of each vent.',
        ],
      },
    ],
    included: [
      'AC not cooling',
      'Weak airflow in older homes',
      'Frozen coils',
      'Electrical parts',
      'Mini split repair',
    ],
    nearby: ['Lafourche Crossing', 'Schriever', 'Chackbay', 'Kraemer'],
    gallery: [],
    faqs: [
      { q: 'How often should tenants change the filter?', a: 'Check it every month during the cooling season. In a rental, a filter schedule or having the landlord change it heads off a lot of frozen coils.' },
      { q: 'Do you cover Schriever and Chackbay?', a: 'Yes. Both are part of our service area around Thibodaux.' },
      { q: 'Why are my back rooms so much hotter than the front?', a: 'Long or undersized duct runs are a common reason, particularly in older homes that had central air added later. Sun exposure and thin insulation can add to it.' },
    ],
    cta: { heading: 'Need AC service in Thibodaux?', text: 'We cover Thibodaux, Lafourche Crossing and Schriever.' },
  },
]
