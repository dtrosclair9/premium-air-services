import type { ServicePage } from '../types'
import { jobVideos } from '../videos'

export const services: ServicePage[] = [
  {
    slug: 'ac-repair',
    heroImage: '/images/services/ac-repair.jpg',
    heroAlt: 'Outdoor AC unit on a raised metal stand against a brick wall',
    navLabel: 'AC Repair',
    group: 'cooling',
    title: 'AC Repair in Lockport & South Lafourche',
    description:
      'AC not cooling or not blowing cold air? Premium Air Services repairs home air conditioners in Lockport, Larose, Raceland and nearby bayou towns. Call today.',
    h1: 'AC Repair in Lockport, LA',
    eyebrow: 'Air conditioning repair',
    intro: [
      'If your air conditioner quit, is blowing warm air or keeps shutting off, call Premium Air Services. We repair home AC systems in Lockport and all around South Lafourche.',
      'Tell us how old the system is and what it’s been doing, and we’ll have a good idea where to start.',
    ],
    sections: [
      {
        h2: 'Why is my AC not blowing cold air?',
        body: [
          'A dirty filter, a frozen coil or a failed part at the outdoor unit causes most of these calls. When a filter clogs, too little air crosses the indoor coil. The coil ices over, and what comes out of your vents gets weak and warm.',
          'Go look at the outdoor unit while the system is calling for cold air. If the fan isn’t spinning, or you hear a hum and nothing starts, the capacitor (the part that gives the motors their starting kick) or the contactor (the switch that sends them power) is the likely culprit. Both wear out faster down here because these systems run so many hours a year.',
        ],
        bullets: [
          'Make sure the thermostat is on cool and the fan is on auto',
          'Put in a clean filter if the old one is dirty',
          'Look for a tripped breaker, and reset it only once',
          'If there’s ice on the lines or coil, turn cooling off and run the fan until it thaws',
        ],
      },
      {
        h2: 'What does it mean if water is leaking around the indoor unit?',
        body: [
          'Your condensate drain line is probably clogged. An AC pulls a lot of water out of the air in this humidity, and that water leaves through a small pipe. Algae and sludge build up in there until it backs up into the pan.',
          'Many systems have a float switch that shuts the AC off when the pan fills, so a clogged drain can look like a dead system. If you see water, turn the system off at the thermostat before it soaks the ceiling or the closet floor.',
        ],
      },
      {
        h2: 'Is low refrigerant always a leak?',
        body: [
          'Almost always. An air conditioner doesn’t burn through refrigerant the way a truck burns gas, so a low charge means it got out somewhere. Topping it off without finding the leak only buys you time.',
          'Older units make this a harder call. New R-22 is no longer made or imported in the United States, so what’s left for repairs is limited. A leak on one of those systems is when a lot of people start pricing a replacement.',
        ],
      },
      {
        h2: 'Should I repair my AC or replace it?',
        body: [
          'Go by the age of the system, the size of the repair and how often you’ve been calling for service. A capacitor on a six-year-old unit is an easy yes. On a 15-year-old system with a bad compressor, most people at least price a new one.',
          'If you’re leaning toward a new system, our page on [AC installation and replacement] walks through that decision.',
        ],
      },
    ],
    included: [
      'AC not cooling or blowing warm air',
      'Frozen coils and weak airflow',
      'Capacitors, contactors and fan motors',
      'Clogged condensate drains',
      'Refrigerant leaks',
      'Thermostat problems',
      'Mini split and heat pump systems',
      'Emergency and after-hours calls',
    ],
    gallery: ['/images/work/condenser-on-stand-white-siding.jpg'],
    faqs: [
      { q: 'Do you take emergency AC calls?', a: 'Yes, including after hours. If your AC quit and it can’t wait, call us.' },
      { q: 'Why does my AC run all day and never reach the set temperature?', a: 'Dirty coils, a clogged filter, leaky ducts, low refrigerant or an undersized system will all do that. In the worst of August, even a healthy system runs for long stretches, so tell us how many degrees behind it’s falling.' },
      { q: 'Why does my AC keep turning on and off?', a: 'That’s called short cycling. Look at the filter first, then the thermostat. It also happens with a frozen coil, a failing part or a unit too big for the house. If it’s struggling, leave it off, since hard starts are rough on a compressor.' },
      { q: 'Why is my outdoor unit humming but the fan is not spinning?', a: 'It’s usually the capacitor. Shut the system off so the motor doesn’t overheat, and don’t try to spin the fan by hand with the power on.' },
      { q: 'Can I pour bleach down my AC drain line?', a: 'Skip the bleach. It’s harsh on metal parts if it reaches the pan or coil. Some owner’s manuals call for a little diluted vinegar as upkeep, but once a line has backed up, it has to be cleared out.' },
      { q: 'What should I check after a storm or power outage?', a: 'Walk around the outdoor unit and look for debris or a water line, and don’t run a unit that took on water. Otherwise, wait a few minutes after the power comes back before you turn it on. If it doesn’t start normally, shut it back off.' },
    ],
    related: ['ac-maintenance', 'ac-installation', 'mini-split-installation'],
    serviceType: 'Air conditioning repair',
    cardBlurb: 'Warm air, no air, water leaks, ice on the lines or a system that keeps shutting off.',
    cta: { heading: 'Is your AC acting up?', text: 'Describe what it’s doing when you call. We work on home systems in Lockport and across South Lafourche.' },
  },
  {
    slug: 'ac-installation',
    heroImage: '/images/services/ac-installation.jpg',
    heroAlt: 'Outdoor AC unit on a concrete pad in the grass beside a house with white siding',
    navLabel: 'AC Installation & Replacement',
    group: 'cooling',
    title: 'AC Installation & Replacement in Lockport, LA',
    description:
      'Thinking about a new AC unit? Premium Air Services installs and replaces central air systems in Lockport and South Lafourche. Call for a quote on your home.',
    h1: 'AC Installation & Replacement in Lockport, LA',
    eyebrow: 'New air conditioning systems',
    intro: [
      'A new AC is a big purchase, and in South Louisiana you lean on it most of the year. Premium Air Services installs and replaces central air systems for homes in Lockport and the towns nearby.',
      'If yours is getting old, it’s a lot easier to plan this in April than the day it quits in July.',
    ],
    sections: [
      {
        h2: 'How do I know it is time to replace my air conditioner?',
        body: [
          'It’s time when the system is getting old, the repairs keep coming, or a major part like the compressor fails. Age alone won’t settle it, because one unit might last years longer than the same model across the street.',
          'High power bills and rooms that never get comfortable point the same way. So does a house that stays clammy with the AC running.',
        ],
      },
      {
        h2: 'What size AC does my house need?',
        body: [
          'It depends on the house: square footage, insulation, windows, ceiling height and which way it faces. Going by the size of the old unit can repeat a mistake somebody made years ago.',
          'Too big is a real problem here. An oversized system cools the air fast and shuts off before it’s pulled enough moisture out, and you end up cold and clammy at the same time. The right size runs longer and handles the humidity better.',
        ],
      },
      {
        h2: 'What affects the cost of a new AC unit?',
        body: [
          'The size of the system, how efficient it is, and whether you’re replacing just the outdoor unit or everything. Moving equipment to a new spot adds to the job, and so does electrical work or bad ducts.',
          'Your indoor and outdoor equipment have to match. Changing only half of an older system often causes trouble, and with older refrigerants it may not be possible at all. Give us a call about the house and what’s there now. Estimates on new systems are free, and we offer financing.',
        ],
      },
      {
        h2: 'Should I get a straight AC or a heat pump?',
        body: [
          'Both cool the same way. A heat pump also runs in reverse to heat your home, which works well in our short, mild winters. A straight AC pairs with a separate heat source, usually electric strips or a gas furnace.',
          'Got gas heat you like? Keep it and get a straight AC. If the house is all electric, look hard at a heat pump. Our [heating and heat pump page] has more on how they work.',
        ],
      },
    ],
    included: [
      'Central AC replacement',
      'New system installation',
      'Heat pump systems',
      'Mini split systems',
      'Sizing for your house',
      'Package units',
      'Dehumidifiers, UV lights and air purifiers',
      'Thermostats, including smart thermostats',
      'Additions, garages and shops',
      'Free estimates and financing',
      'Help comparing repair and replacement',
    ],
    gallery: ['/images/work/new-air-handler-closet.jpg', '/images/work/condenser-on-stand-white-siding.jpg'],
    videos: [jobVideos.systemChangeout, jobVideos.furnaceReplacement],
    faqs: [
      { q: 'Is there a warranty on the work?', a: 'Yes. You get 10 years on parts and 2 years on labor. Ask us what it covers on your system.' },
      { q: 'What is SEER2?', a: 'SEER2 is the current efficiency rating for air conditioners and heat pumps. A higher rating means less electricity for the same cooling, and it costs more up front. With as many hours as an AC runs here, it’s a number to pay attention to.' },
      { q: 'Why does the outdoor unit sit on a stand or raised pad?', a: 'To keep it above standing water and let it drain. How high it needs to go comes down to your property and any local requirements.' },
      { q: 'Can I replace only the outdoor unit?', a: 'Sometimes. The two halves are designed to work together, and an older indoor coil may not match a new outdoor unit. The age and refrigerant type of what you have now decide it.' },
      { q: 'Will a new AC fix hot rooms in my house?', a: 'Not by itself, if the real trouble is ductwork, poor airflow, sun or thin insulation. Find the cause first, or you could pay for a new system and still have the same hot room.' },
      { q: 'What should I do to get ready for an install?', a: 'Clear a path to the indoor and outdoor units and move anything stored around them. If the equipment’s in the attic, keep the access open.' },
      { q: 'Do you install systems in new additions?', a: 'Yes. Depending on the layout, we’d either extend the existing system or put in a mini split.' },
    ],
    related: ['ac-repair', 'heating-repair', 'ductwork-repair'],
    serviceType: 'Air conditioning installation',
    cardBlurb: 'New central air and full replacements, sized for your house and this humidity.',
    cta: { heading: 'Looking at a new AC?', text: 'Estimates on new systems are free. Let us know what you’ve got now, and we’ll talk through your options.' },
  },
  {
    slug: 'mini-split-installation',
    navLabel: 'Mini Splits',
    group: 'cooling',
    title: 'Mini Split Installation in Lockport, LA',
    description:
      'Ductless mini split installation for additions, garages, shops and rooms that never cool. Premium Air Services serves Lockport and South Lafourche. Call today.',
    h1: 'Mini Split Installation in Lockport, LA',
    eyebrow: 'Ductless air conditioning',
    intro: [
      'A mini split cools or heats a space with no ductwork. Premium Air Services installs them in homes around Lockport, mostly where central air is hard to extend or one room needs its own unit.',
      'An outdoor unit connects to a wall unit through a small hole in the wall, so you’re not tearing into ceilings to run ducts.',
    ],
    sections: [
      {
        h2: 'Where does a mini split make sense?',
        body: [
          'Anywhere that got added on later or never tied into the main system. Running new ducts to those spots is a headache, and a separate unit keeps a garage or shop from pulling on your house AC.',
        ],
        bullets: [
          'Room additions and converted garages',
          'Garages, shops and sheds',
          'Bedrooms or back rooms that never cool down',
          'Older homes with no room for ductwork',
        ],
      },
      {
        h2: 'What size mini split do I need?',
        body: [
          'It comes down to square footage, insulation, ceiling height, windows and how much heat the room takes on. A shop with a tin roof needs more than a bedroom the same size, and even more if the big door stays open all day.',
          'Mini splits are sold by BTU, and those square footage charts are only a starting point. Go too big and you get the same problem as central air: it cools fast and leaves the moisture behind.',
        ],
      },
      {
        h2: 'Single zone or multi-zone?',
        body: [
          'A single-zone system has one outdoor unit and one wall unit, and that’s all you need for one room or an open space. A multi-zone runs several wall units off one outdoor unit, with separate temperature control in each room.',
          'Multi-zone costs more and takes more planning. If the rooms are far apart, a couple of single-zone systems can be the better setup.',
        ],
      },
      {
        h2: 'When is a mini split the wrong choice?',
        body: [
          'When you’re trying to cool a whole house with one unit. A wall unit cools the room it’s in and doesn’t push much air past a closed door, so one head in the hallway will probably disappoint you. If the whole house is uncomfortable, start with your central system or ducts.',
        ],
      },
    ],
    included: [
      'Single-zone systems',
      'Multi-zone systems',
      'Additions, garages and shops',
      'Heating and cooling in one unit',
      'Mini split repair and maintenance',
      'Help choosing size and location',
    ],
    gallery: ['/images/work/mini-split-outdoor-white-siding.jpg', '/images/work/mini-split-indoor-above-door.jpg'],
    faqs: [
      { q: 'Does a mini split heat as well as cool?', a: 'Most do. They work as heat pumps, which suits our mild winters. A few models are cooling only, so look before you buy.' },
      { q: 'How big is the hole in the wall?', a: 'About three inches, enough for the refrigerant lines, power and drain. It gets sealed and covered once the lines are run.' },
      { q: 'Do mini splits need maintenance?', a: 'Yes. Rinse the filters in the wall unit regularly. The coil and blower wheel collect dirt and mold over time too, and our humidity speeds that up.' },
      { q: 'Can I put a mini split in my garage or shop?', a: 'Yes, that’s one of the most common places for them. Insulation makes a big difference, especially under a metal roof.' },
      { q: 'Will a mini split lower my power bill?', a: 'It will if it lets you cool one room instead of running the whole house system. They’re efficient and don’t lose air through ducts. How much you save depends on what you’re running now.' },
    ],
    related: ['ac-installation', 'ac-repair', 'ac-maintenance'],
    serviceType: 'Ductless mini split installation',
    cardBlurb: 'Ductless cooling and heating for additions, garages, shops and hot back rooms.',
    cta: { heading: 'Have a room that never cools?', text: 'Give us a call about the space. Estimates are free.' },
  },
  {
    slug: 'heating-repair',
    heroImage: '/images/services/heating.jpg',
    heroAlt: 'Gas furnace in a utility closet with its flue pipe and yellow gas line connected',
    navLabel: 'Heating & Heat Pumps',
    group: 'heating-air',
    title: 'Heating & Heat Pump Repair in Lockport, LA',
    description:
      'No heat or a heat pump acting up? Premium Air Services works on heat pumps, electric heat and gas furnaces for homes in Lockport and nearby towns. Call us.',
    h1: 'Heating & Heat Pump Repair in Lockport, LA',
    eyebrow: 'Heating service',
    intro: [
      'Nobody thinks about the heater until the first cold snap. We work on heat pumps, electric heat strips and gas furnaces in Lockport and the surrounding area.',
      'If yours blows cold, smells burnt or started making a new noise, get it looked at before the next cold front. We take emergency and after-hours calls too.',
    ],
    sections: [
      {
        h2: 'Why is my heat pump blowing cold air?',
        body: [
          'It may just be in defrost. In cold, damp weather, frost forms on the outdoor coil and the unit briefly reverses to melt it. You’ll see steam and feel cooler air for a few minutes, and that’s normal.',
          'If it keeps blowing cool, make sure the thermostat says heat and the outdoor unit is running. From there it could be low refrigerant, a bad reversing valve (the part that switches the system between heating and cooling) or trouble at the outdoor unit.',
        ],
      },
      {
        h2: 'What does emergency heat do?',
        body: [
          'Emergency heat shuts off the outdoor heat pump and runs the electric strips by themselves. It’s meant for when the heat pump has failed, and it uses a lot more electricity. Leave it on by accident and you’ll see it on your next power bill.',
          'If you need it to stay warm, use it. Then get the heat pump fixed so you can switch back.',
        ],
      },
      {
        h2: 'Why does my heater smell when I first turn it on?',
        body: [
          'That dusty, burnt smell the first few minutes of the season is dust burning off the heat strips or furnace. It should clear up fast.',
          'A smell that stays, or anything like melting plastic or an electrical burn, is different. Turn the system off and call. If you smell gas, leave the house and call your gas company or 911 from outside.',
        ],
      },
      {
        h2: 'Heat pump, heat strips or gas: what does my house have?',
        body: [
          'Look at the indoor unit. A gas furnace has a gas line and a flue pipe. An all-electric house usually has either a heat pump with backup strips or a straight AC with strips.',
          'Can’t tell? Don’t worry about it. Read us the model number off the outdoor unit and we can usually work it out.',
        ],
      },
    ],
    included: [
      'No heat or weak heat',
      'Heat pump repair',
      'Electric heat strips',
      'Gas furnace repair and installation',
      'Heat pump installation',
      'Thermostat problems',
      'Burning smells and strange noises',
    ],
    gallery: [],
    videos: [jobVideos.furnaceReplacement],
    faqs: [
      { q: 'Is it normal for a heat pump to run all the time when it is cold?', a: 'On cold nights, yes. Heat pumps run longer than other heating systems. It’s a problem when the house won’t hold temperature or the outdoor unit is covered in ice.' },
      { q: 'Why is there ice on my heat pump?', a: 'Light frost that clears during a defrost cycle is normal in damp cold weather. Thick ice that stays means something’s wrong, so turn it off and call.' },
      { q: 'How often should I check my heating system?', a: 'Once a year, before it gets cold. A system can sit for months down here, so try the heat on a mild day before you actually need it.' },
      { q: 'Should I worry about carbon monoxide with a gas furnace?', a: 'Any home with gas appliances needs working carbon monoxide detectors. If one goes off, get everyone outside and call 911. A cracked heat exchanger or blocked flue can cause it.' },
      { q: 'Can a heat pump handle a Louisiana cold snap?', a: 'Yes. Most have electric backup strips for the coldest nights. Expect a higher bill while those strips are running.' },
      { q: 'Do you install heat pumps too?', a: 'Yes. They’re a common pick when replacing an all-electric system, and our AC installation page compares them with a straight AC.' },
    ],
    related: ['ac-installation', 'ac-maintenance', 'ductwork-repair'],
    serviceType: 'Heating system repair',
    cardBlurb: 'Heat pumps, electric strips and gas furnaces. No heat, burnt smells, strange noises.',
    cta: { heading: 'Heater not working?', text: 'Have the model number handy if you can find it.' },
  },
  {
    slug: 'ac-maintenance',
    heroImage: '/images/services/ac-maintenance.jpg',
    heroAlt: 'Gloved hand holding a blower wheel coated with dirt',
    navLabel: 'AC Maintenance',
    group: 'cooling',
    title: 'AC Maintenance & Tune-Ups in Lockport, LA',
    description:
      'Get your AC ready before the heat hits. Premium Air Services does AC maintenance and tune-ups for homes in Lockport and South Lafourche. Call to schedule.',
    h1: 'AC Maintenance & Tune-Ups in Lockport, LA',
    eyebrow: 'AC tune-ups',
    intro: [
      'A dirty coil or weak capacitor is a small fix if someone catches it early. We do AC maintenance for homes around Lockport.',
      'Schedule in the spring, before everybody needs their AC at once.',
    ],
    sections: [
      {
        h2: 'What does an AC tune-up usually cover?',
        body: [
          'A tune-up means cleaning what’s dirty and testing the parts most likely to fail. On a typical system, that looks like this:',
        ],
        bullets: [
          'Filter and airflow',
          'Outdoor coil, cleaned or inspected',
          'Condensate drain flushed or checked',
          'Capacitor, contactor and fan motor tested',
          'Refrigerant pressures and temperatures',
          'Thermostat and electrical connections',
        ],
      },
      {
        h2: 'How often should an AC be serviced here?',
        body: [
          'Once a year at minimum, in spring before the heavy run season. If the same system heats your house, give it a second look in the fall. Pets, heavy use and a lot of plants around the unit can all call for more.',
        ],
      },
      {
        h2: 'What can I do between service visits?',
        body: [
          'Stay on top of the filter. A cheap filter changed often does better than an expensive one left in too long.',
          'Outside, keep plants and yard debris a couple of feet from the condenser so it can breathe, and aim the mower’s discharge away from it. If you can safely reach the drain line, watch for slow drainage or water standing in the pan.',
        ],
      },
      {
        h2: 'Do you offer a maintenance plan?',
        body: [
          'Yes. We offer a yearly maintenance plan. Ask us what’s included when you call.',
        ],
      },
      {
        h2: 'Does salt air affect my AC?',
        body: [
          'Yes. It corrodes coils and outdoor cabinets, and the closer you are to the coast, the faster it goes. With the power off, a low-pressure freshwater rinse slows it down.',
          'If your unit is showing rust or the coil looks worn, mention it when you call.',
        ],
      },
    ],
    included: [
      'Yearly maintenance plan',
      'Spring AC check-ups',
      'Condensate drain checks',
      'Coil cleaning or inspection',
      'Electrical parts testing',
      'Filter and airflow checks',
      'Heating checks before winter',
    ],
    gallery: [],
    videos: [jobVideos.blowerBuildup],
    faqs: [
      { q: 'How often should I change my AC filter?', a: 'Look at it every month during cooling season. A basic one-inch filter usually lasts one to three months, less with pets or a lot of dust.' },
      { q: 'Is it OK to wash my outdoor unit with a hose?', a: 'Yes. Turn off the power first and use a garden hose on a gentle spray. Never a pressure washer, which will flatten the coil fins.' },
      { q: 'Why does my AC drain line keep clogging?', a: 'Algae and slime love a drain that stays wet and warm. Regular flushing takes care of most of it. If one keeps clogging anyway, the line may have a slope or trap problem.' },
      { q: 'Can maintenance prevent every breakdown?', a: 'No. Parts can still fail without warning. What it does is catch wear and dirt early, so you’re less likely to find out during the hottest week of the summer.' },
      { q: 'Do mini splits need tune-ups too?', a: 'Yes. Wall units collect dust and grow mold inside, so the coil and blower wheel need cleaning from time to time.' },
    ],
    related: ['ac-repair', 'ductwork-repair', 'mini-split-installation'],
    serviceType: 'Air conditioning maintenance',
    cardBlurb: 'Coil, drain, electrical and airflow checks before the hot months get here.',
    cta: { heading: 'Get your AC checked before summer', text: 'Spring is the easiest time to get on the schedule.' },
  },
  {
    slug: 'ductwork-repair',
    heroImage: '/images/services/ductwork.jpg',
    heroAlt: 'Silver insulated flex ducts run across an attic under wood trusses',
    navLabel: 'Ductwork Repair & Replacement',
    group: 'heating-air',
    title: 'Ductwork Repair & Replacement in Lockport, LA',
    description:
      'Hot rooms, weak airflow or torn flex duct? Premium Air Services repairs and replaces ductwork for homes in Lockport and across Lafourche and Terrebonne.',
    h1: 'Ductwork Repair & Replacement in Lockport, LA',
    eyebrow: 'Ductwork',
    intro: [
      'If one room stays hot or your AC never catches up, your ducts may be the problem. We repair and replace ductwork for homes in Lockport and around Lafourche and Terrebonne.',
      'A leaky duct dumps air you already paid to cool into the attic or under the house. Before you buy a new system, have the ducts looked at. A new unit on bad ducts leaves you with the same hot rooms.',
    ],
    sections: [
      {
        h2: 'How can I tell if my ducts are leaking?',
        body: [
          'The usual signs are hot rooms, a house that feels damp, high power bills and a lot of dust. A hot attic or crawl space makes it worse, since that’s where your cold air is escaping to.',
          'If you can safely get to your ducts, look for flex duct that’s torn, crushed, sagging or disconnected. Old tape that’s dried out and fallen off is another common find.',
        ],
      },
      {
        h2: 'Why is one room always hotter than the rest?',
        body: [
          'A long or kinked duct run, a closed damper, a duct that’s too small or a room that gets all the afternoon sun. Additions and rooms over a garage tend to get the worst of it, because they sit at the end of long runs or got tied in later.',
          'A lot of people try closing vents in the other rooms. Don’t. It raises the pressure in the system and makes duct leaks worse.',
        ],
      },
      {
        h2: 'When should ductwork be replaced?',
        body: [
          'When it’s old and brittle, badly damaged, took on floodwater or never fit the system in the first place. Flex duct doesn’t last forever in a hot attic, and the insulation can give out long before the equipment does.',
          'The best time to deal with it is when you’re replacing the system anyway. Our [AC replacement page] covers how to plan both together.',
        ],
      },
    ],
    included: [
      'Torn or disconnected flex duct',
      'Sealing leaks',
      'Hot rooms and weak airflow',
      'Duct replacement',
      'Flood-damaged ducts',
      'Ducts for additions',
    ],
    gallery: [],
    videos: [jobVideos.atticFlexDuct],
    faqs: [
      { q: 'Do you clean air ducts?', a: 'No, we don’t do duct cleaning. If dust is the problem, a leaky return pulling in attic dust is something we can fix.' },
      { q: 'Is duct tape OK for sealing ducts?', a: 'No. Regular cloth duct tape dries out and fails in attic heat. Duct mastic and approved foil tape hold up much better.' },
      { q: 'Should I close vents in rooms I don’t use?', a: 'No. Central systems are built for a certain amount of airflow, and choking it off leads to leaks and coil problems.' },
      { q: 'Can leaky ducts cause humidity problems?', a: 'Yes. A leaky return pulls humid air into the system from the attic or under the house, and a leaky supply makes the house draw in humid air from outside.' },
      { q: 'Do ducts need to be replaced after a flood?', a: 'Usually, especially flex duct and insulation that got wet. Soaked insulation holds moisture and grows mold, so get them inspected before you run the system.' },
      { q: 'Will new ducts lower my power bill?', a: 'If your old ones leak badly, you should see a difference. How much depends on how bad they were and where they run.' },
    ],
    related: ['ac-maintenance', 'ac-installation', 'mini-split-installation'],
    serviceType: 'Ductwork repair and replacement',
    cardBlurb: 'For hot rooms, weak airflow, torn flex duct and old leaky runs.',
    cta: { heading: 'Got a room that stays hot?', text: 'Which rooms give you trouble? Start there when you call.' },
  },
  {
    slug: 'mobile-home-ac-repair',
    navLabel: 'Mobile Home AC',
    group: 'heating-air',
    title: 'Mobile Home AC Repair in Lockport, LA',
    description:
      'Mobile home AC not keeping up? Premium Air Services repairs AC and heat in mobile and manufactured homes in Lockport and across Lafourche and Terrebonne.',
    h1: 'Mobile Home AC Repair in Lockport, LA',
    eyebrow: 'Mobile and manufactured homes',
    intro: [
      'Roughly one home in six or seven around here is a mobile or manufactured home. We work on their AC and heating systems all over the area.',
      'They’re set up differently than a site-built house, so the trouble often isn’t where you’d expect it.',
    ],
    sections: [
      {
        h2: 'Why is my mobile home AC not cooling?',
        body: [
          'Start with the basics: the filter, a frozen coil, the outdoor unit. Then think about the ducts, which usually run through the belly under the floor.',
          'If the belly wrap is torn or the crossover duct between sections has come loose, the air you’re paying to cool is going straight under the house. One whole end of the home stays warm while the system runs nonstop.',
        ],
      },
      {
        h2: 'What is a crossover duct?',
        body: [
          'On a double-wide, the crossover connects the ducts on one half of the home to the other. It sits under the home or in the ceiling, where it gets crushed, pulled loose or chewed by animals.',
          'If one side of your home is noticeably warmer than the other, look here first. Storms and the home settling can knock it loose too.',
        ],
      },
      {
        h2: 'Can any AC be installed in a mobile home?',
        body: [
          'No. Manufactured homes have their own rules for equipment and clearances, and many have tight closets with indoor units built for those spaces. What you can put in depends on the home and what’s there now.',
          'Have your model number and the home’s data plate handy when you call. The data plate is usually inside a kitchen cabinet or closet.',
        ],
      },
    ],
    included: [
      'AC and heat repair',
      'Belly and crossover duct problems',
      'Closet-mounted units',
      'Mini split additions',
      'Replacement options',
    ],
    gallery: [],
    faqs: [
      { q: 'Why is my mobile home floor cold or wet?', a: 'Often it’s a torn belly or leaking duct putting cold air under your floor. In humid weather that turns into condensation and damp insulation, so get it fixed before the damage spreads.' },
      { q: 'Is a mini split a good option for a mobile home?', a: 'It’s a good fix for a room the main system can’t reach, or a home with bad ducts. Wall construction and placement take some planning.' },
      { q: 'Where is the AC unit in a mobile home?', a: 'Usually in a hallway closet, with ducts running through the floor to the rooms. Some homes use a package unit that sits outside and connects through the side or underneath.' },
      { q: 'Why does my mobile home AC run constantly?', a: 'Duct leaks under the home are the first suspect, followed by a dirty filter or coil, thin walls and a lot of sun.' },
      { q: 'Do you work on single-wide and double-wide homes?', a: 'Yes, both. If you know how old the home and the system are, tell us when you call.' },
    ],
    related: ['ac-repair', 'ductwork-repair', 'mini-split-installation'],
    serviceType: 'Mobile home air conditioning repair',
    cardBlurb: 'AC and heat for single-wide and double-wide homes, including belly and crossover ducts.',
    cta: { heading: 'Is your mobile home running warm?', text: 'Let us know if it’s a single-wide or double-wide.' },
  },
]
