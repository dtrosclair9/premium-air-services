import type { CityPage } from '../types'

// Each town page is written for that town. Distances are rough road estimates
// from research, always said as "about".

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
      'We’re about 19 miles away in Lockport, and we fix home air conditioners all over Houma, including Bayou Cane, Bayou Blue and Gray.',
      'Storm water and old ductwork are behind a lot of AC trouble in Terrebonne.',
    ],
    sections: [
      {
        h2: 'Is my outdoor unit safe to run after high water?',
        body: [
          'Not if water reached it. In a storm like Francine in 2024, low spots around Houma are the first worry. Look for a water line, mud on the coil or a shifted pad before you touch the thermostat.',
          'Wet electrical parts are a safety hazard and can ruin the system, so leave it off until someone has checked them. Saltwater is the worst of it, since the salt stays on the coil and controls after the water dries.',
        ],
      },
      {
        h2: 'Why do mobile homes in Terrebonne have different AC problems?',
        body: [
          'Roughly one home in six or seven in the parish is a mobile home, and their ducts usually run under the floor. A torn belly or loose crossover duct can dump your cold air under the house even when the AC itself works fine.',
          'If one end of your home stays warm, read our [mobile home AC page] and give us a call.',
        ],
      },
      {
        h2: 'What if my Houma home is older?',
        body: [
          'Plenty of homes around Houma are 40 years old or more, and they’ve been through several AC systems, sometimes on the same original ducts. If you keep fixing the AC and the house still isn’t comfortable, the ducts are the next place to look.',
          'If a system old enough to use R-22 refrigerant springs a leak, a big repair gets harder to justify. Ask about [replacing the system] before you pay for one.',
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
      { q: 'Do you come out to east Houma and Bayou Blue?', a: 'Yes, we go out to both.' },
      { q: 'I’m in Bayou Cane, outside the city limits. Is that a problem?', a: 'No. We work in Bayou Cane and Gray the same as Houma itself.' },
      { q: 'Do you also install new systems in Houma?', a: 'Yes. If a repair call shows a new system is the smarter move, we’ll go over that with you. Our Houma AC installation page has more.' },
    ],
    cta: { heading: 'AC out in Houma?', text: 'We work all over Houma, Bayou Cane, Bayou Blue and Gray.' },
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
      'That might be central air, a heat pump or a mini split, depending on your house.',
    ],
    sections: [
      {
        h2: 'Should I raise my new AC unit in Houma?',
        body: [
          'If your lot takes water, yes. Plenty of homes around Houma have outdoor units on stands or raised pads because of heavy rain and storm surge, and one bad flood can ruin a unit sitting low.',
          'Find out your flood zone and any parish requirements if you’re replacing a unit after a storm. The stand needs to be solid and secured, with room around the unit for air.',
        ],
      },
      {
        h2: 'How do I choose a system for an older Terrebonne home?',
        body: [
          'Don’t just match the old unit. Houses from the 1970s and 1980s often have less insulation, leakier windows and ducts sized for a different system. If the old unit always struggled, the same size won’t fix anything.',
          'Think about what’s changed, too. Added rooms, new windows or more attic insulation all change what size you need. Look at the ducts while you’re at it.',
        ],
      },
      {
        h2: 'Is a mini split a better fit for part of my Houma house?',
        body: [
          'For a converted garage, a new addition or a backyard shop, usually. It’s simpler than extending old ductwork, and your main system doesn’t have to carry the extra space.',
          'If the rest of the house already has good ducts, stick with central air there. Our [mini split page] goes over where they work and where they don’t.',
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
      { q: 'How do I know if my old unit was ruined by a flood?', a: 'If water reached the electrical parts or the base of the unit, don’t run it until it’s been inspected. Saltwater is especially hard on coils and controls.' },
      { q: 'Can I put a new AC on my old ductwork?', a: 'If the ducts are in good shape and the right size, yes. Old flex duct that’s torn or undersized will hold a new system back.' },
      { q: 'Do you install heat pumps in Houma?', a: 'Yes. With our mild winters, they’re a popular choice for all-electric homes.' },
    ],
    cta: { heading: 'Replacing an AC in Houma?', text: 'We install in Houma, Bayou Cane, Bayou Blue and Gray.' },
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
      'Raceland is one of the closest towns to us, about 8 miles up the road from Lockport. We work on home AC here and in Mathews and Gheens.',
      'Most calls are for an AC that stopped cooling, started leaking or began making a new noise.',
    ],
    sections: [
      {
        h2: 'Why does my Raceland house feel sticky on wet days?',
        body: [
          'Part of your AC’s job is pulling water out of the air, and on wet days it’s got a lot more to pull. Wet ground around the house, a damp crawl space or a leaky duct can bring in more moisture than it can keep up with.',
          'If the thermostat says the right temperature and the house still feels damp, moisture is your real problem, and that’s worth a call.',
        ],
      },
      {
        h2: 'What about outdoor units near fields and yards?',
        body: [
          'Cane dust, grass clippings and cottonwood fluff coat the outdoor coil until the unit can’t shed heat. It builds up slowly, and most people don’t notice until the first hot week.',
          'With the power off, rinse the coil with a garden hose. If it’s still packed or the unit keeps running hot, it needs a real cleaning. Our [maintenance page] lists what else to look at.',
        ],
      },
      {
        h2: 'What if my Raceland house sits on piers?',
        body: [
          'Get under there with a flashlight if you can do it safely. Standing water under the house keeps the air damp, and ducts hanging low get torn or knocked loose.',
          'A torn duct under the floor blows cooled air into the dirt. If the floor feels cold or the rooms on one end run warm, that’s usually where to look.',
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
      { q: 'Do you cover Mathews and Gheens?', a: 'Yes, and they’re both close to us.' },
      { q: 'Should the AC fan be set to on or auto?', a: 'Auto. With the fan left on, water that collected on the coil gets blown back into the house. If it’s on auto and still feels damp, call us.' },
      { q: 'How much pressure is too much when I rinse my outdoor unit?', a: 'Anything stronger than a garden hose is too much. The fins bend easily, and flattened fins block air the same as dirt does.' },
    ],
    cta: { heading: 'Need AC help in Raceland?', text: 'We’re close by in Lockport.' },
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
      'Larose sits where Bayou Lafourche meets the Intracoastal Waterway, about 13 miles down the bayou from Lockport. We repair AC systems here and in nearby Cut Off.',
      'Salt air wears on an outdoor unit, and so do the storms that keep shutting it down.',
    ],
    sections: [
      {
        h2: 'How does being close to the water affect an AC in Larose?',
        body: [
          'Moist air and salt in the breeze eat at outdoor units over time. You’ll see rust on the cabinet, screws and base pan, or a coil that starts to look flaky. It creeps up slowly, then shows itself as a leak or a failed part.',
          'If your unit’s already got heavy rust, have us look at the coil and electrical parts while we’re out there.',
        ],
      },
      {
        h2: 'What should I do with my AC when evacuating?',
        body: [
          'Before you leave, turn the system off at the thermostat and at the breaker to protect it from power surges. Move anything loose away from the outdoor unit, since high wind can throw it right into the coil.',
          'When you come back, look the unit over before you flip the breaker on. A closed-up house with no air gets humid fast, so get it cooling as soon as it’s safe.',
        ],
      },
      {
        h2: 'Why does my AC keep tripping the breaker?',
        body: [
          'A breaker that keeps tripping points to a failing compressor, a bad fan motor, a short or a weak breaker. Reset it once. If it trips again, stop, because repeated resets make the damage worse.',
          'Leave it off and call us. Tell us if it trips right away or after the system’s been running a while.',
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
      { q: 'Do you work in Cut Off?', a: 'Yes. It’s just down the road from Larose.' },
      { q: 'Should I cover my outdoor unit before a storm?', a: 'No need, and a cover can trap moisture. Move loose objects and shut off the power instead.' },
      { q: 'Can a rusty outdoor unit be saved?', a: 'Surface rust on the cabinet is mostly cosmetic. A rusted-through base or corroded coil is more serious, and the age of the unit decides if it’s worth fixing.' },
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
      'We make the drive about 24 miles down the bayou from Lockport to fix air conditioners in Galliano, Cut Off and Golden Meadow.',
      'Lower Lafourche gets more wind and salt than most of the parish, and outdoor units show it.',
    ],
    sections: [
      {
        h2: 'How do I get my AC ready after a long power outage?',
        body: [
          'Look the unit over before you turn anything on. After Ida, parts of Lafourche went weeks without power, and a lot of homes sat hot and closed up. Look for a shifted unit, torn insulation on the line set (the copper lines running to the house) and damage to the disconnect box.',
          'If it all looks okay, start it and listen. If it hums, trips the breaker or won’t cool, shut it back off and call.',
        ],
      },
      {
        h2: 'Should my outdoor unit be up on a stand down here?',
        body: [
          'Most of the time, yes. A lot of homes on lower Lafourche are raised, and the outdoor units go up with them. A unit on a platform sees less water, but it has to be secured against wind and safe to reach for service.',
          'After a storm, look at the stand as well as the unit. Fix loose straps or a rusted frame before the next one.',
        ],
      },
      {
        h2: 'Why does my camp or raised house feel humid?',
        body: [
          'A place that sits empty with the AC off gets damp quickly. Torn ducts under a raised floor pull in humid air on top of that.',
          'For small spaces and additions, a [mini split] is often simpler than running ducts under a raised floor.',
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
      { q: 'Do you go as far as Golden Meadow?', a: 'Yes. Give us your address when you call.' },
      { q: 'Will salt air shorten the life of my AC?', a: 'It will, especially close to open water. Getting rust looked at early buys you more years out of the unit.' },
      { q: 'What thermostat setting should I use for an empty house?', a: 'Set it a few degrees warmer instead of turning it off, so the system still pulls some moisture out. How warm depends on the house and how long you’ll be gone.' },
      { q: 'Can you check my AC before storm season?', a: 'Yes. Call in the spring, before hurricane season starts.' },
    ],
    cta: { heading: 'Live down the bayou?', text: 'We go to Galliano, Cut Off and Golden Meadow.' },
  },
  {
    slug: 'ac-repair-thibodaux-la',
    service: 'ac-repair',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    title: 'Air Conditioning Repair in Thibodaux, LA',
    description:
      'Need AC repair in Thibodaux? Premium Air Services repairs home air conditioners in Thibodaux, Lafourche Crossing, Schriever and Chackbay. Call us to schedule.',
    h1: 'AC Repair in Thibodaux, LA',
    eyebrow: 'Up the bayou from Lockport',
    intro: [
      'We fix home air conditioners in Thibodaux, Lafourche Crossing and Schriever. Thibodaux is about 23 miles from Lockport.',
      'Between the older houses near downtown and the rentals around Nicholls State, this town has its own set of AC headaches.',
    ],
    sections: [
      {
        h2: 'What AC problems are common in older Thibodaux homes?',
        body: [
          'Airflow, mostly. Older houses weren’t built around central air, so the ducts went wherever they’d fit. Long runs, tight turns and a return that’s too small leave the back rooms warm and make the system work harder.',
          'High ceilings and a lot of windows add heat too, so a unit can fall behind even if it looks big enough. [Ductwork] is the first thing to look at before you assume the AC itself has failed.',
        ],
      },
      {
        h2: 'What should landlords near Nicholls State know?',
        body: [
          'Tenants leave filters in too long, and a clogged filter means a frozen coil and a service call. Hand them a filter schedule or change the filters yourself, and you’ll head off a lot of those. Flush the drain line before the fall semester too.',
        ],
      },
      {
        h2: 'What should I do if my AC stops on a hot afternoon?',
        body: [
          'Look at the filter, the thermostat and the breaker first. If there’s ice on the lines, turn cooling off and run the fan so it can thaw. If the outdoor fan isn’t spinning, shut the system off and call us.',
          'If only part of the house is warm, note whether the system’s still running and how much air is coming out of each vent. That tells us a lot when you call.',
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
      { q: 'How often should tenants change the filter?', a: 'Every month during cooling season is the safe answer for a rental, since you can’t count on anyone looking at it. Three cheap filters cost a lot less than a service call.' },
      { q: 'Do you cover Schriever and Chackbay?', a: 'Yes, along with the rest of the Thibodaux area.' },
      { q: 'Why are my back rooms so much hotter than the front?', a: 'Long or undersized duct runs, in a lot of older homes. The back of the house is the last stop for the air. Sun and thin insulation add to it.' },
    ],
    cta: { heading: 'Need AC service in Thibodaux?', text: 'We cover Thibodaux, Lafourche Crossing and Schriever.' },
  },
]
