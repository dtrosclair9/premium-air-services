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
      'If your air conditioner quit, is blowing warm air or keeps shutting off, call Premium Air Services. We repair home AC systems in Lockport and the towns around it.',
      'Knowing how old the system is and what it has been doing helps us know where to start.',
    ],
    sections: [
      {
        h2: 'Why is my AC not blowing cold air?',
        body: [
          'A dirty filter, a frozen coil or a failed part at the outdoor unit causes most of these calls. When a filter clogs, too little air crosses the indoor coil, the coil freezes over, and the air coming out of your vents gets weak and warm.',
          'Go look at the outdoor unit while the system is calling for cold air. If the fan is not spinning, or you hear a hum and nothing starts, the capacitor or contactor is a common cause. Both are normal wear parts down here because these systems run so many hours a year.',
        ],
        bullets: [
          'Check the thermostat is set to cool and the fan is on auto',
          'Put in a clean filter if the old one is dirty',
          'Look for a tripped breaker, and reset it only once',
          'If you see ice on the lines or the coil, turn cooling off and run the fan until it thaws',
        ],
      },
      {
        h2: 'What does it mean if water is leaking around the indoor unit?',
        body: [
          'Most of the time, the condensate drain line is clogged. An AC pulls a lot of water out of the air in this humidity, and that water has to drain out through a small pipe. Algae and sludge build up in the line until it backs up into the pan.',
          'Many systems have a float switch that shuts the AC off when the pan fills, so a clogged drain can look like a dead system. If you see water, turn the system off at the thermostat so it does not soak the ceiling or the closet floor.',
        ],
      },
      {
        h2: 'Is low refrigerant always a leak?',
        body: [
          'Almost always. An air conditioner does not use up refrigerant the way a car uses gas, so a low charge usually means it escaped somewhere. Adding more without looking for the leak only buys you time.',
          'The age of the system and the type of refrigerant matter here. New R-22, used in many older units, is no longer made or imported in the United States, so what is left for repairs is limited. A leak on one of those systems is often when people start pricing a replacement.',
        ],
      },
      {
        h2: 'Should I repair my AC or replace it?',
        body: [
          'Look at the age of the system, what the repair involves and how often you have been calling for service. A capacitor on a six-year-old unit is an easy yes. On a 15-year-old system with a bad compressor, most people at least price a new one.',
          'If replacing looks like the better move, our page on [AC installation and replacement] covers what goes into that decision.',
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
    ],
    gallery: ['/images/work/condenser-on-stand-white-siding.jpg'],
    faqs: [
      { q: 'Why does my AC run all day and never reach the set temperature?', a: 'Dirty coils, a clogged filter, leaky ducts, low refrigerant or a system that is too small can all cause it. On the hottest days of the year, a healthy system may also run for long stretches, so it helps to tell us how far behind it is falling.' },
      { q: 'Why does my AC keep turning on and off?', a: 'Short cycling usually comes from a dirty filter, a frozen coil, a thermostat problem, a failing part or a unit too big for the house. Leave it off if it is struggling, since hard starts are rough on a compressor.' },
      { q: 'Why is my outdoor unit humming but the fan is not spinning?', a: 'A bad capacitor is the usual cause. Turn the system off so the motor does not overheat, and do not try to spin the fan by hand with the power on.' },
      { q: 'Can I pour bleach down my AC drain line?', a: 'We would skip bleach, since it can be hard on metal parts if it reaches the pan or coil. A little diluted vinegar is the more common choice if your system has an access point, but check your owner’s manual first. A line that has already backed up needs to be cleared.' },
      { q: 'What should I check after a storm or power outage?', a: 'Look for debris or standing water around the outdoor unit, and do not run a unit that took on water. Give it a few minutes after power comes back before turning it on, and shut it back off if it does not start normally.' },
    ],
    related: ['ac-maintenance', 'ac-installation', 'mini-split-installation'],
    serviceType: 'Air conditioning repair',
    cardBlurb: 'Warm air, no air, water leaks, ice on the lines or a system that keeps shutting off.',
    cta: { heading: 'Is your AC acting up?', text: 'Call and tell us what it is doing. We work on home systems in Lockport and across South Lafourche.' },
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
      'A new AC is a big purchase, and in South Louisiana you lean on it for most of the year. Premium Air Services installs and replaces central air systems for homes in Lockport and the surrounding towns.',
      'It helps to plan ahead if you can, since a replacement is easier to think through before the old unit quits in July.',
    ],
    sections: [
      {
        h2: 'How do I know it is time to replace my air conditioner?',
        body: [
          'Replacement starts to make sense when the system is getting old, repairs keep coming, or a major part like the compressor fails. Heat and long run times are hard on outdoor units here, so age alone does not tell the whole story.',
          'Higher power bills, rooms that never feel comfortable and a house that stays sticky can also point to a system that has fallen behind. Sometimes the fix is in the ductwork, so it pays to look at the whole setup before buying equipment.',
        ],
      },
      {
        h2: 'What size AC does my house need?',
        body: [
          'The right size comes from the house itself: square footage, insulation, windows, ceiling height, which way it faces and how tight it is. Going by the size of the old unit can repeat a mistake made years ago.',
          'An oversized system is a real problem here. It cools the air quickly and shuts off before it has pulled enough moisture out, which leaves the house cold and clammy. A properly sized system runs longer and handles the humidity better.',
        ],
      },
      {
        h2: 'What affects the cost of a new AC unit?',
        body: [
          'Price depends on the size of the system, its efficiency, whether you are replacing only the outdoor unit or the full system, and what your ductwork and electrical need. Moving equipment to a new spot or fixing bad ducts adds to the job.',
          'Your outdoor and indoor equipment need to be matched. Replacing only one half of an older system often causes trouble, and it may not be possible with older refrigerants. We would need to know about your house to give you a real number.',
        ],
      },
      {
        h2: 'Should I get a straight AC or a heat pump?',
        body: [
          'Both cool the same way. A heat pump can also run in reverse to heat your home, which works well in our short, mild winters. A straight AC pairs with a separate heat source, usually electric strips or a gas furnace.',
          'If you already have gas heat you like, a straight AC may fit best. If your home is all electric, a heat pump is worth a look. Our [heating and heat pump page] goes into more detail.',
        ],
      },
    ],
    included: [
      'Central AC replacement',
      'New system installation',
      'Heat pump systems',
      'Mini split systems',
      'Sizing for your house',
      'Thermostat setup',
      'Help comparing repair and replacement',
    ],
    gallery: ['/images/work/new-air-handler-closet.jpg', '/images/work/condenser-on-stand-white-siding.jpg'],
    videos: [jobVideos.systemChangeout, jobVideos.furnaceReplacement],
    faqs: [
      { q: 'What is SEER2?', a: 'SEER2 is the current efficiency rating for air conditioners and heat pumps. A higher number uses less electricity to make the same amount of cooling, and it usually costs more up front. In a place where the AC runs this much, it is worth comparing.' },
      { q: 'Why does the outdoor unit sit on a stand or raised pad?', a: 'Raising the unit keeps it above standing water and helps it drain and breathe. How high it should go depends on the property and any local requirements.' },
      { q: 'Can I replace only the outdoor unit?', a: 'Sometimes, but the indoor and outdoor equipment are designed to work together. An older indoor coil may not match a new outdoor unit, so the age and refrigerant type of what you have decide this.' },
      { q: 'Will a new AC fix hot rooms in my house?', a: 'Not always. Hot rooms often come from ductwork, poor airflow, sun exposure or insulation. It helps to find the cause first, since a new system on bad ducts can leave the same room hot.' },
      { q: 'What should I do to get ready for an install?', a: 'Clear a path to the indoor unit and the outdoor unit, and move anything stored around them. If the equipment is in the attic, keep the access area open.' },
      { q: 'Do you install systems in new additions?', a: 'Yes. Depending on the layout, extending the existing system or adding a mini split may be the better fit.' },
    ],
    related: ['ac-repair', 'heating-repair', 'ductwork-repair'],
    serviceType: 'Air conditioning installation',
    cardBlurb: 'New central air and full replacements, sized for your house and this humidity.',
    cta: { heading: 'Looking at a new AC?', text: 'We can quote your home in Lockport or anywhere around South Lafourche.' },
  },
  {
    slug: 'mini-split-installation',
    heroImage: '/images/services/mini-split.jpg',
    heroAlt: 'White ductless mini split unit mounted high on a bedroom wall',
    navLabel: 'Mini Splits',
    group: 'cooling',
    title: 'Mini Split Installation in Lockport, LA',
    description:
      'Ductless mini split installation for additions, garages, shops and rooms that never cool. Premium Air Services serves Lockport and South Lafourche. Call today.',
    h1: 'Mini Split Installation in Lockport, LA',
    eyebrow: 'Ductless air conditioning',
    intro: [
      'A mini split cools or heats a space without any ductwork. Premium Air Services installs them in homes around Lockport, usually where central air is hard to extend or a single room needs help.',
      'One outdoor unit connects to one or more wall units through a small hole in the wall, so it is a practical fix for spaces your main system does not reach.',
    ],
    sections: [
      {
        h2: 'Where does a mini split make sense?',
        body: [
          'Mini splits work well in spaces that were added on or were never tied into the main system. Running new ducts can be difficult in those areas, and a separate unit also keeps a garage or shop from pulling on your house AC.',
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
          'Size depends on the square footage, insulation, ceiling height, windows and how much heat the room takes on. A shop with a tin roof needs more than a bedroom of the same size. A garage door that stays open will also change the picture.',
          'Mini splits are sold by BTU, and square footage charts only give you a starting point. As with central air, a unit that is too big cools fast and leaves moisture behind.',
        ],
      },
      {
        h2: 'Single zone or multi-zone?',
        body: [
          'A single-zone system has one outdoor unit and one wall unit, which suits one room or an open space. A multi-zone system runs several indoor units from one outdoor unit, and each room gets its own temperature control.',
          'Multi-zone costs more and takes more planning, so it depends on how many rooms you want to cover. Several single-zone systems can sometimes be the better setup if the rooms are far apart.',
        ],
      },
      {
        h2: 'When is a mini split the wrong choice?',
        body: [
          'A wall unit cools the room it sits in and does not push much air through closed doors. If you are trying to fix a whole house with one head in a hallway, you will probably be disappointed. Whole-house comfort problems may call for a look at your central system or ducts first.',
        ],
      },
    ],
    included: [
      'Single-zone systems',
      'Multi-zone systems',
      'Additions, garages and shops',
      'Heating and cooling in one unit',
      'Help choosing size and location',
    ],
    gallery: ['/images/work/mini-split-outdoor-white-siding.jpg', '/images/work/mini-split-indoor-above-door.jpg'],
    faqs: [
      { q: 'Does a mini split heat as well as cool?', a: 'Most do. They work as heat pumps, which suits our mild winters. Check the model before buying, since a few are cooling only.' },
      { q: 'How big is the hole in the wall?', a: 'It is usually about three inches, enough for the refrigerant lines, power and drain. It gets sealed and covered once the lines are run.' },
      { q: 'Do mini splits need maintenance?', a: 'Yes. Filters in the wall unit should be rinsed regularly, and the coil and blower wheel can collect dirt and mold over time. Humid air and heavy use make that faster here.' },
      { q: 'Can I put a mini split in my garage or shop?', a: 'Yes, and those are common uses. Insulation makes a big difference, especially under a metal roof. How often the doors stay open matters too.' },
      { q: 'Will a mini split lower my power bill?', a: 'It can if it lets you cool one room without running the whole house system, since mini splits are generally efficient and have no duct losses. Your results depend on the old setup and how you use it.' },
    ],
    related: ['ac-installation', 'ac-repair', 'ac-maintenance'],
    serviceType: 'Ductless mini split installation',
    cardBlurb: 'Ductless cooling and heating for additions, garages, shops and hot back rooms.',
    cta: { heading: 'Have a room that never cools?', text: 'Additions, garages, shops and back rooms are the usual places for one.' },
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
      'Heat tends to get ignored until the first cold snap. We work on heat pumps, electric heat strips and gas furnaces in Lockport and the towns around it.',
      'A system that blows cold, smells burnt or makes a new noise should get looked at.',
    ],
    sections: [
      {
        h2: 'Why is my heat pump blowing cold air?',
        body: [
          'First, it may be in defrost. In cold, damp weather, frost forms on the outdoor coil and the unit briefly reverses to melt it. You may see steam and feel cooler air for a few minutes, which is normal.',
          'If it keeps blowing cool air, the cause could be a thermostat setting, low refrigerant, a failed reversing valve or a problem with the outdoor unit. Check that the thermostat says heat and that the outdoor unit is running.',
        ],
      },
      {
        h2: 'What does emergency heat do?',
        body: [
          'Emergency heat turns off the outdoor heat pump and runs the electric strips by themselves. It is meant for when the heat pump has failed, and it uses a lot more electricity. Leaving it on by mistake can give you a surprise on your next power bill.',
          'If you have to use it to stay warm, that is what it is there for. Just get the heat pump repaired so you can switch back.',
        ],
      },
      {
        h2: 'Why does my heater smell when I first turn it on?',
        body: [
          'A dusty, burnt smell for the first few minutes of the season is usually dust burning off the heat strips or furnace. It should clear up quickly.',
          'A smell that stays, or anything that smells like melting plastic or an electrical burn, is different. Turn the system off and have it checked. If you smell gas, leave the house and call your gas company or 911 from outside.',
        ],
      },
      {
        h2: 'Heat pump, heat strips or gas: what does my house have?',
        body: [
          'Look at the thermostat and the indoor unit. A gas furnace has a gas line and a flue pipe. An all-electric house usually has either a heat pump with backup strips or a straight AC with strips. The model number on the outdoor unit can also tell us which you have.',
          'Knowing what you have helps when you call, but do not worry if you are unsure. Give us the model number and we can usually work it out.',
        ],
      },
    ],
    included: [
      'No heat or weak heat',
      'Heat pump repair',
      'Electric heat strips',
      'Gas furnace service',
      'Thermostat problems',
      'Burning smells and strange noises',
    ],
    gallery: [],
    videos: [jobVideos.furnaceReplacement],
    faqs: [
      { q: 'Is it normal for a heat pump to run all the time when it is cold?', a: 'Heat pumps run longer than other heating systems, especially on cold nights, and that is often normal. If the house is not holding temperature or the outdoor unit is covered in ice, have it checked.' },
      { q: 'Why is there ice on my heat pump?', a: 'Light frost that clears during a defrost cycle is normal in damp cold weather. A unit covered in thick ice that stays there has a problem, so turn it off and have it looked at.' },
      { q: 'How often should I check my heating system?', a: 'A yearly check before cold weather is common. In South Louisiana, a system can sit for months between uses, so try the heat on a mild day before you need it.' },
      { q: 'Should I worry about carbon monoxide with a gas furnace?', a: 'Any home with gas appliances should have working carbon monoxide detectors. If one goes off, get everyone outside and call 911. A cracked heat exchanger or blocked flue is one possible source.' },
      { q: 'Can a heat pump handle a Louisiana cold snap?', a: 'Generally, yes. Most heat pumps have electric backup strips for the coldest nights. Expect higher bills on those nights while the strips run.' },
      { q: 'Do you install heat pumps too?', a: 'Yes. A heat pump is a common choice when replacing an all-electric system. Our AC installation page covers how to compare the two.' },
    ],
    related: ['ac-installation', 'ac-maintenance', 'ductwork-repair'],
    serviceType: 'Heating system repair',
    cardBlurb: 'Heat pumps, electric strips and gas furnaces, including no heat, burnt smells and strange noises.',
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
      'An AC in South Louisiana runs for most of the year. Regular maintenance helps catch small problems early, and we do it for homes around Lockport.',
      'Spring is a good time to schedule, before everyone needs their AC at the same time.',
    ],
    sections: [
      {
        h2: 'What does an AC tune-up usually cover?',
        body: [
          'A tune-up generally means cleaning what needs it and testing the parts most likely to fail. Exact steps vary with the system, so ask us what we would look at on yours.',
        ],
        bullets: [
          'Checking the filter and airflow',
          'Cleaning or inspecting the outdoor coil',
          'Flushing or checking the condensate drain',
          'Testing the capacitor, contactor and fan motor',
          'Checking refrigerant pressures and temperatures',
          'Checking the thermostat and electrical connections',
        ],
      },
      {
        h2: 'How often should an AC be serviced here?',
        body: [
          'At least once a year, ideally in spring before the heavy run season. Systems that also provide heat often get a second look in the fall. Homes with pets, heavy use or a lot of nearby vegetation may need more attention.',
        ],
      },
      {
        h2: 'What can I do between service visits?',
        body: [
          'The biggest thing is the filter. A cheap filter changed often usually does better than an expensive one left in too long. Check it monthly during the summer and replace it when it looks dirty.',
          'Outside, keep plants and yard debris a couple of feet from the condenser so it can breathe. If you can safely reach the drain line, watch for slow drainage or standing water in the pan. When you cut grass, aim the discharge away from the unit.',
        ],
      },
      {
        h2: 'Does salt air affect my AC?',
        body: [
          'Salt air can corrode coils and outdoor cabinets, and the risk is higher the closer you are to the coast. With the power off, rinsing the coil gently with fresh water can help. Keep the pressure low, because a pressure washer can flatten the fins.',
          'If your unit is showing rust or the coil looks worn, mention it when you call.',
        ],
      },
    ],
    included: [
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
      { q: 'How often should I change my AC filter?', a: 'Check it every month during the cooling season. Many households change a basic one-inch filter every one to three months, and homes with pets or dust often need it more frequently.' },
      { q: 'Is it OK to wash my outdoor unit with a hose?', a: 'Yes. Turn off the power first and use a gentle spray from a garden hose. Do not use a pressure washer, since it can bend the coil fins.' },
      { q: 'Why does my AC drain line keep clogging?', a: 'Algae and slime grow easily in the drain because it stays wet and warm. Regular flushing helps, and a line that keeps clogging may have a slope or trap problem worth checking.' },
      { q: 'Can maintenance prevent every breakdown?', a: 'No. It catches wear and dirt before they cause trouble, but parts can still fail without warning. It does give you a better chance of finding problems before the hottest week of summer.' },
      { q: 'Do mini splits need tune-ups too?', a: 'Yes. Wall units collect dust and can grow mold inside, so filters need regular rinsing and the coil and blower wheel need cleaning from time to time.' },
    ],
    related: ['ac-repair', 'air-duct-cleaning', 'mini-split-installation'],
    serviceType: 'Air conditioning maintenance',
    cardBlurb: 'Coil, drain, electrical and airflow checks before the hot months get here.',
    cta: { heading: 'Get your AC checked before summer', text: 'Spring is the easiest time to get on the schedule.' },
  },
  {
    slug: 'air-duct-cleaning',
    navLabel: 'Air Duct Cleaning',
    group: 'heating-air',
    title: 'Air Duct Cleaning in Lockport & Houma, LA',
    description:
      'Wondering if your air ducts need cleaning? Premium Air Services cleans ducts for homes in Lockport, Houma and South Lafourche and checks for bigger problems.',
    h1: 'Air Duct Cleaning in Lockport, LA',
    eyebrow: 'Ductwork and indoor air',
    intro: [
      'Duct cleaning helps when something is actually in your ducts, such as heavy debris, pest droppings or visible mold growth. We clean ducts for homes in Lockport, Houma and the towns between.',
      'Not every house needs it. A dirty return or a clogged coil can look like a duct problem.',
    ],
    sections: [
      {
        h2: 'Do my air ducts need cleaning?',
        body: [
          'The EPA does not recommend duct cleaning as routine maintenance, but it does say to consider it in a few specific situations. Those include visible mold growth, signs of rodents or insects, or ducts so clogged that dust is blowing out of the registers.',
          'Remodeling can be another good reason, since drywall dust travels everywhere. A little dust on a register cover by itself does not mean the whole system is dirty.',
        ],
      },
      {
        h2: 'What about mold in my AC or ducts?',
        body: [
          'Mold grows where there is moisture, and most houses here have plenty. Cleaning alone will not last if the moisture source is still there. Leaky ducts, a dirty coil, a poorly draining pan or an oversized AC can all be part of the cause.',
          'Not every dark spot on a register is mold. Only an expert can say for sure, which may take a lab test, and an extensive problem may call for a mold remediation specialist.',
        ],
      },
      {
        h2: 'What should I do first if my house feels dusty?',
        body: [
          'Start with the filter and make sure it fits with no gaps around the edges. Then look at the return grille and check the return duct for leaks. A leaky return in an attic or under a house can pull in dust and insulation.',
          'If dust keeps showing up after that, a look at your duct system can show if cleaning or a [duct repair] is the better fix.',
        ],
      },
    ],
    included: [
      'Supply and return ducts',
      'Debris from remodeling',
      'Signs of pests in ducts',
      'Checking for leaks and damage',
      'Filter fit and return checks',
    ],
    gallery: [],
    faqs: [
      { q: 'How often should air ducts be cleaned?', a: 'There is no set schedule. The EPA suggests doing it when there is a specific reason, like visible growth, pests or heavy debris.' },
      { q: 'Will duct cleaning help my allergies?', a: 'It might if your ducts are actually contaminated, but research has not shown that it helps as a routine step. Better filtration and humidity control often make more difference.' },
      { q: 'Can dirty ducts make my AC work harder?', a: 'Heavy buildup can restrict airflow, but a clogged filter or dirty coil is a far more common cause. Those are worth checking before you pay for duct cleaning.' },
      { q: 'What about duct cleaning ads with very low prices?', a: 'Be careful with low coupon offers. Ask exactly what is included, because a proper job covers more than the registers you can see.' },
      { q: 'Do I need to clean my ducts after a flood?', a: 'Ducts that took on water are a bigger issue than cleaning. Soaked insulation and flex duct often have to be replaced, so have them inspected first.' },
    ],
    related: ['ductwork-repair', 'ac-maintenance', 'mobile-home-ac-repair'],
    serviceType: 'Air duct cleaning',
    cardBlurb: 'For pests, remodeling dust, heavy debris and growth you can actually see.',
    cta: { heading: 'Not sure about your ducts?', text: 'What you are seeing around the registers is a good place to start.' },
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
      'If one room stays hot or your AC never seems to catch up, the problem could be in your ducts. We repair and replace ductwork for homes in Lockport and around Lafourche and Terrebonne.',
      'Bad ductwork can waste what you paid to cool, so check it before you buy a new system.',
    ],
    sections: [
      {
        h2: 'How can I tell if my ducts are leaking?',
        body: [
          'Common signs are rooms that stay hot, a house that feels sticky, high power bills and a lot of dust. A hot attic or crawl space makes leaks worse because the air being lost is what you already cooled.',
          'If you can safely get to your ducts, look for flex duct that is torn, crushed, sagging or disconnected. Old tape that has dried out and fallen off is another common find.',
        ],
      },
      {
        h2: 'Why is one room always hotter than the rest?',
        body: [
          'A long or kinked duct run, a closed damper, too small a duct, or a room with lots of sun can all do it. Rooms over a garage and additions often get the worst of it, since they were added later.',
          'Closing vents in other rooms is a common fix people try, but it often does more harm than good. It raises pressure in the system and can make duct leaks worse.',
        ],
      },
      {
        h2: 'When should ductwork be replaced?',
        body: [
          'Replacement makes sense when ducts are old and brittle, full of damage, took on floodwater or never fit the system properly. Flex duct has a limited life in a hot attic, and the insulation can deteriorate long before the system gets replaced.',
          'New equipment is also a good time to check. A new system tied to undersized or leaky ducts will not perform like it should. Our [AC replacement page] covers how to plan both together.',
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
      { q: 'Is duct tape OK for sealing ducts?', a: 'Regular cloth duct tape dries out and fails in attic heat. Duct mastic and approved foil tapes hold up much better.' },
      { q: 'Should I close vents in rooms I do not use?', a: 'Generally, no. Central systems are designed for a certain amount of airflow, and closing vents can raise pressure and cause leaks or coil problems.' },
      { q: 'Can leaky ducts cause humidity problems?', a: 'Yes. A leaky return can pull humid air into the system from an attic or under the house, and a leaky supply can pull humid outside air into the house.' },
      { q: 'Do ducts need to be replaced after a flood?', a: 'Often they do, particularly flex duct and duct insulation that got wet. Soaked insulation holds moisture and can grow mold, so have them inspected before you run the system.' },
      { q: 'Will new ducts lower my power bill?', a: 'If your current ducts leak badly, fixing them can help. How much you save depends on how bad they were and where they run.' },
    ],
    related: ['air-duct-cleaning', 'ac-installation', 'mini-split-installation'],
    serviceType: 'Ductwork repair and replacement',
    cardBlurb: 'For hot rooms, weak airflow, torn flex duct and old leaky runs.',
    cta: { heading: 'Got a room that stays hot?', text: 'Knowing which rooms give you trouble helps us know where to look.' },
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
      'Roughly one home in six or seven around here is a mobile or manufactured home. We work on their AC and heating systems throughout the area.',
      'These homes are set up differently than a site-built house, so the problem is often in a different place too.',
    ],
    sections: [
      {
        h2: 'Why is my mobile home AC not cooling?',
        body: [
          'You can start with the same checks as any home: a dirty filter, a frozen coil or a problem at the outdoor unit. But many mobile homes also have a problem specific to their ductwork, which usually runs through the belly under the floor.',
          'If the belly wrap is torn or the crossover duct between sections has come loose, cool air may be going straight under your house. That can leave a whole end of the home warm while the system runs nonstop.',
        ],
      },
      {
        h2: 'What is a crossover duct?',
        body: [
          'On a double-wide, a crossover connects the duct system on one half of the home to the other. It sits under the home or in the ceiling, and it can get crushed, pulled loose or chewed by animals.',
          'If one side of your home is noticeably warmer than the other, this is one of the first things to look at. Storms and home movement can also knock it loose.',
        ],
      },
      {
        h2: 'Can any AC be installed in a mobile home?',
        body: [
          'Not always. Manufactured homes have their own rules for equipment and clearances, and many have tight closets with indoor units built for those spaces. The right replacement depends on the home and what is in it now.',
          'Having your model number and the home’s data plate information handy can help. The data plate is usually inside a kitchen cabinet or closet.',
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
      { q: 'Why is my mobile home floor cold or wet?', a: 'A torn belly or a leaking duct can put cold air under your floor, which in humid weather can lead to condensation and damp insulation. Have the ducts and underbelly checked before the damage spreads.' },
      { q: 'Is a mini split a good option for a mobile home?', a: 'It can be, especially for a room the main system does not cool well or a home with bad ducts. Wall construction and placement matter, so it takes some planning.' },
      { q: 'Where is the AC unit in a mobile home?', a: 'Many have an indoor unit in a hallway closet, with ducts running through the floor to the rooms. Others use a package unit that sits outside the home and connects through the side or underneath.' },
      { q: 'Why does my mobile home AC run constantly?', a: 'Common causes are duct leaks under the home, a dirty filter or coil, thin insulation and a lot of sun. On very hot days, long run times can also be normal, so it helps to know how far off the temperature is.' },
      { q: 'Do you work on single-wide and double-wide homes?', a: 'Yes. The age of the home and the system both help, if you know them.' },
    ],
    related: ['ac-repair', 'ductwork-repair', 'mini-split-installation'],
    serviceType: 'Mobile home air conditioning repair',
    cardBlurb: 'AC and heat for single-wide and double-wide homes, including belly and crossover ducts.',
    cta: { heading: 'Is your mobile home running warm?', text: 'Let us know if it is a single-wide or double-wide.' },
  },
]
