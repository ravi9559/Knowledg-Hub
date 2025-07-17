import { BookCopy, Building2, FileText, Globe, MapPin, type LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';

export type Resource = {
  title: string;
  description: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  type: string;
};

export type Section = {
  id: string;
  title: string;
  count: number;
  icon: ComponentType<{ className?: string }>;
  resources: Resource[];
};

export const knowledgeHubData: Section[] = [
  {
    id: 'chennai',
    title: 'Chennai Suite',
    count: 17,
    icon: MapPin,
    resources: [
      { title: 'Chennai Corridors-In Palms', description: 'Source industrial and warehouse corridors in Chennai.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/chennai-corridors-in-palms.html', icon: MapPin, type: 'Map' },
      { title: 'Chennai Industrial Clusters-Distances', description: 'Source distance data for Chennai’s industrial clusters.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/chennai-lndustrial-clusters-distances.html', icon: MapPin, type: 'Data' },
      { title: 'CHENNAI - ROUTES & DISTANCES', description: 'Source route and distance information for Chennai.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/chennai-routes-distances.html', icon: MapPin, type: 'Data' },
      { title: 'Areas in THIRUVALLUR Circle', description: 'Identify key areas within the Thiruvallur circle.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/areas-in-thiruvallur-circle.html', icon: MapPin, type: 'Map' },
      { title: 'Areas in Chennai Port Circle', description: 'Source databox on areas in the Chennai Port circle.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/areas-in-chennai-port-circle.html', icon: MapPin, type: 'Map' },
      { title: 'Areas in Sriperumbudur-Oragadam Circle', description: 'Access area details for Sriperumbudur-Oragadam.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/areas-in-sriperumbudur-oragadam-circle.html', icon: MapPin, type: 'Map' },
      { title: 'Areas in Mappedu-Sunguvarchatram Circle', description: 'Explore Mappedu-Sunguvarchatram areas for sourcing.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/areas-in-mappedu-sunguvarchatram-circle.html', icon: MapPin, type: 'Map' },
      { title: 'Areas in North Chennai Circle', description: 'Source data on North Chennai circle areas.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/areas-in-north-chennai-circle.html', icon: MapPin, type: 'Map' },
      { title: 'Chennai-ORR Field Survey Report', description: 'Source zoning and survey data for Chennai’s ORR.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/orr-field-survey-report-lbr-orr-land.html', icon: MapPin, type: 'Report' },
      { title: 'ORR Map-Outer Ring Road', description: 'Explore the Outer Ring Road map for Chennai sites.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/orr-map-outer-ring-road-chennai.html', icon: MapPin, type: 'Map' },
      { title: 'CPRR Phase I-Map', description: 'Source the Chennai Peripheral Ring Road Phase I map.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/cprr-phase-i-map.html', icon: MapPin, type: 'Map' },
      { title: 'Chennai Warehouse Corridors', description: 'Access numbered warehouse corridors in Chennai.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/chennai-warehouse-corridors-numbering.html', icon: MapPin, type: 'Map' },
      { title: 'Industries Oragadam and Sriperumbudur', description: 'Source industrial site data for Oragadam and Sriperumbudur.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/industries-oragadam-and-sriperumbudur.html', icon: MapPin, type: 'Data' },
      { title: 'iMap of LBR V2 & Maraimalai Nagar', description: 'Explore LBR’s custom map for Maraimalai Nagar industries.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/imap-of-lbr-v2-industries-around.html', icon: MapPin, type: 'Map' },
      { title: 'CPRR-Chennai Peripheral Ring Road', description: 'Access the Chennai Peripheral Ring Road map.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/cprr-chennai-peripheral-ring-road-map.html', icon: MapPin, type: 'Map' },
      { title: 'CMA_Administrative_Units', description: 'Source administrative unit data for Chennai.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/cmaadministrativeunits.html', icon: MapPin, type: 'Data' },
      { title: 'CKT Map-Chennai Regions', description: 'Source LBR’s combined industrial map for CKT regions.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/test_23.html', icon: MapPin, type: 'Map' },
    ],
  },
  {
    id: 'bengaluru',
    title: 'Bengaluru Suite',
    count: 12,
    icon: MapPin,
    resources: [
        { title: 'Bengaluru-Key Warehouse Corridor', description: 'Access distance data for Bengaluru’s warehouse corridors.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/bengaluru-key-warehouse-corridor.html', icon: MapPin, type: 'Data' },
        { title: 'Bengaluru-Zoning Regulations', description: 'Learn about zoning laws and master plan details.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/bengaluru-zoningregulations.html', icon: MapPin, type: 'Regulation' },
        { title: 'Chowdadenahalli Revenue Map', description: 'Assess land for transactions in Chowdadenahalli.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/chowdadenahalli-v2-revenue-map.html', icon: MapPin, type: 'Map' },
        { title: 'Hindaganala Village Map', description: 'Assess land transaction potential in Hindaganala.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/hindaganala-village-map-nandagudi.html', icon: MapPin, type: 'Map' },
        { title: 'Bengaluru Land Use Zones', description: 'Understand Bengaluru’s land use zones.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/bengaluru-land-use-zone-colour-legend.html', icon: MapPin, type: 'Map' },
        { title: 'Hosur-Bengaluru Opportunities', description: 'Engage with investment opportunities in Hosur-Bengaluru.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/hosur-bengaluru-industry-market-real.html', icon: MapPin, type: 'Data' },
        { title: 'Hoskote Bengaluru Master Plan', description: 'Use the master plan to transact in Hoskote.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/hoskote-bengaluru-master-plan.html', icon: MapPin, type: 'Map' },
        { title: 'Krishnagiri-Hosur-Bengaluru Map', description: 'Explore sites in this industrial corridor.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/krishnagiri-hosur-bengaluru-industrial.html', icon: MapPin, type: 'Map' },
        { title: 'Bengaluru City Circles', description: 'Source warehouse zones in Bengaluru.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/bengaluru-city-circles-and-warehouse.html', icon: MapPin, type: 'Map' },
        { title: 'Bengaluru Warehouse Areas', description: 'Identify warehouse areas in Bengaluru.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/bengaluru-warehouse-areas-google-map.html', icon: MapPin, type: 'Map' },
        { title: 'STRR - Satellite Town Ring Road', description: 'Source details on the Satellite Town Ring Road.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/strr-satellite-town-ring-road.html', icon: MapPin, type: 'Map' },
        { title: 'Bengaluru Revenue Records', description: 'Guide to interpret Bengaluru’s revenue records.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/understanding-bengaluru-revenue-records.html', icon: MapPin, type: 'Guide' },
    ]
  },
  {
    id: 'madurai',
    title: 'Madurai Suite',
    count: 1,
    icon: MapPin,
    resources: [
        { title: 'Madurai Warehouse Corridors', description: 'Explore warehouse corridors in Madurai.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/madurai-warehouse-corridors-map.html', icon: MapPin, type: 'Map' },
    ]
  },
  {
    id: 'trichy',
    title: 'Trichy Suite',
    count: 1,
    icon: MapPin,
    resources: [
        { title: 'Trichy Industrial Map', description: 'Source industrial map data for Trichy.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/trichy-map.html', icon: MapPin, type: 'Map' },
    ]
  },
  {
    id: 'pan-india',
    title: 'PAN India Suite',
    count: 7,
    icon: MapPin,
    resources: [
        { title: 'Tamilnadu-Revenue Records', description: 'Understand Tamil Nadu’s revenue record structure.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/tamilnadu-revenue-records-template.html', icon: MapPin, type: 'Guide' },
        { title: 'Haradi-H Cross-Revenue Map', description: 'Evaluate land at Haradi-H Cross.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/haradi-h-cross-revenue-map.html', icon: MapPin, type: 'Map' },
        { title: 'Narasapura Village Revenue Map', description: 'Leverage this map for Narasapura planning.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/narasapura-village-revenue-map.html', icon: MapPin, type: 'Map' },
        { title: 'Hyderabad Warehouse Corridors', description: 'Source warehouse corridors in Hyderabad.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/hyderabad-warehouse-corridors-map.html', icon: MapPin, type: 'Map' },
        { title: 'PAN India-Warehouse Corridors', description: 'Access a pan-India view of warehouse corridors.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/pan-india-corridors-circles-for.html', icon: MapPin, type: 'Map' },
        { title: 'Coimbatore Warehouse Corridors', description: 'Explore warehouse corridors in Coimbatore.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/coimbatore-warehouse-corridors.html', icon: MapPin, type: 'Map' },
        { title: 'Warehouse Corridors of India', description: 'Comprehensive map of India’s warehouse corridors.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/warehouse-corridors-of-india.html', icon: MapPin, type: 'Map' },
    ]
  },
  {
    id: 'government-policies',
    title: 'Government Policies',
    count: 7,
    icon: FileText,
    resources: [
        { title: 'Tamil Nadu Automobile and Auto-Components Policy 2014', description: 'Framework for Tamil Nadu’s automotive industry growth.', url: 'https://o2ohub.blogspot.com/2025/04/tamil-nadu-automotive-policy-2014.html', icon: FileText, type: 'Policy' },
        { title: 'Tamil Nadu Logistics Policy & Integrated Logistics Plan 2023', description: 'Strategies for enhancing logistics infrastructure in Tamil Nadu.', url: 'https://o2ohub.blogspot.com/2025/04/tamil-nadu-logistics-policy-integrated.html', icon: FileText, type: 'Policy' },
        { title: 'Tamil Nadu Electric Vehicle Policy 2019', description: 'Promoting electric vehicle adoption in Tamil Nadu.', url: 'https://o2ohub.blogspot.com/2025/04/tamil-nadu-electric-vehicle-policy-2019.html', icon: FileText, type: 'Policy' },
        { title: 'Tamil Nadu Draft Space Industrial Policy 2024', description: 'Policy to foster space industry development in Tamil Nadu.', url: 'https://o2ohub.blogspot.com/2025/04/tamil-nadu-space-industrial-policy.html', icon: FileText, type: 'Policy' },
        { title: 'Tamil Nadu New Integrated Textile Policy 2019', description: 'Boosting Tamil Nadu’s textile industry competitiveness.', url: 'https://o2ohub.blogspot.com/2025/04/tamil-nadu-integrated-textile-policy.html', icon: FileText, type: 'Policy' },
        { title: 'Tamil Nadu Solar Energy Policy 2019', description: 'Initiatives for solar energy development in Tamil Nadu.', url: 'https://o2ohub.blogspot.com/2025/04/tamil-nadu-solar-policy-2019.html', icon: FileText, type: 'Policy' },
        { title: 'Tamil Nadu Aerospace and Defence Industry Review', description: 'Overview of Tamil Nadu’s aerospace and defence initiatives.', url: 'https://o2ohub.blogspot.com/2025/04/defence-corridor.html', icon: FileText, type: 'Review' },
    ]
  },
  {
    id: 'tn-government',
    title: 'TN Government Sites',
    count: 7,
    icon: Building2,
    resources: [
        { title: 'Tamil Nilam GI Viewer', description: 'Access geographical information for Tamil Nadu land records.', url: 'https://tngis.tn.gov.in/apps/gi_viewer/', icon: Globe, type: 'Govt. Site' },
        { title: 'Tamilnadu Geographical Information System', description: 'Explore Tamil Nadu’s GIS for land and spatial data.', url: 'https://tngis.tnega.org/generic_viewer/', icon: Globe, type: 'Govt. Site' },
        { title: 'TN E-Services', description: 'Access Tamil Nadu’s e-services for various government transactions.', url: 'https://eservices.tn.gov.in/eservicesnew/index.html', icon: Globe, type: 'Govt. Site' },
        { title: 'SIPCOT', description: 'View land details and reports for SIPCOT industrial areas.', url: 'https://sipcot.tn.gov.in/portal/reports/landdetails', icon: Globe, type: 'Govt. Site' },
        { title: 'EC - TN Registration', description: 'Access encumbrance certificates for property transactions.', url: 'https://tnreginet.gov.in/portal/webHP?requestType=ApplicationRH&actionVal=homePage&screenId=114&UserLocaleID=en&_csrf=7368a7b7-e06d-474c-b4da-e064dcd6111c', icon: Globe, type: 'Govt. Site' },
        { title: 'GLV - Guide Line Value', description: 'Check guideline values for properties in Tamil Nadu.', url: 'https://tnreginet.gov.in/portal/webHP?requestType=ApplicationRH&actionVal=homePage&screenId=114&UserLocaleID=en&_csrf=7368a7b7-e06d-474c-b4da-e064dcd6111c', icon: Globe, type: 'Govt. Site' },
        { title: 'Tamil Nadu Land Survey', description: 'Access land survey and settlement services for Tamil Nadu.', url: 'https://tnlandsurvey.tn.gov.in/index.php/Select', icon: Globe, type: 'Govt. Site' },
    ]
  },
  {
    id: 'articles',
    title: 'Articles',
    count: 16,
    icon: BookCopy,
    resources: [
        { title: 'Industrial & Warehouse Leasing: More Than Just Broking', description: 'Insights into the complexities of industrial leasing.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/industrial-warehouse-leasing-more-than.html', icon: BookCopy, type: 'Article' },
        { title: 'Kancheepuram - Arakonam: Emerging Industrial Hub', description: 'Exploring the potential of this growing industrial corridor.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/kancheepuram-arakonam-emerging.html', icon: BookCopy, type: 'Article' },
        { title: 'The Art of Negotiating an Industrial/Warehouse Lease', description: 'A guide to successful lease negotiations with LBR.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/the-art-of-negotiating.html', icon: BookCopy, type: 'Article' },
        { title: 'Don’t Leave Your Brand Like a Chappal Outside', description: 'Building a brand that stands out in real estate.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/dont-leave-your-brand-like-chappal.html', icon: BookCopy, type: 'Article' },
        { title: 'From Humble Beginnings to Industrial Powerhouse', description: 'Opportunities in Tamil Nadu’s manufacturing hubs.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/from-humble-beginnings-to-industrial.html', icon: BookCopy, type: 'Article' },
        { title: 'It’s High Time to Look Beyond Sriperumbudur', description: 'Creating new industrial markets beyond established hubs.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/its-high-time-to-look-beyond.html', icon: BookCopy, type: 'Article' },
        { title: 'The Power of Focus: A Broker’s Journey', description: 'A broker’s insights into warehouse leasing success.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/the-power-of-focus-brokers-journey-in.html', icon: BookCopy, type: 'Article' },
        { title: 'High-Speed Rail: Connecting Chennai', description: 'Impact of high-speed rail on affordable living.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/high-speed-rail-connecting-chennai-to_23.html', icon: BookCopy, type: 'Article' },
        { title: 'Madurai: An Emerging Logistics Market', description: 'Logistics potential in southern Tamil Nadu.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/madurai-emerging-logistics-market-in.html', icon: BookCopy, type: 'Article' },
        { title: 'Where Should You Develop Your Next Warehouse?', description: 'Strategic locations for warehouse development in Chennai.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/where-should-you-develop-your-next.html', icon: BookCopy, type: 'Article' },
        { title: 'Mastering the Map: Local Knowledge', description: 'Why local expertise drives corporate real estate success.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/mastering-map-why-local-knowledge-is.html', icon: BookCopy, type: 'Article' },
        { title: 'Does the Standalone Warehouse Stand to Lose?', description: 'Comparing standalone warehouses to logistics parks.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/does-standalone-warehouse-stand-to-lose.html', icon: BookCopy, type: 'Article' },
        { title: 'The Complex Nature of Warehouse Development', description: 'Challenges in industrial warehouse real estate.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/the-complex-nature-of-industrial.html', icon: BookCopy, type: 'Article' },
        { title: 'The Occupancy Level of Warehouses', description: 'How occupancy drives developer success.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/the-occupancy-level-of-warehouses-key.html', icon: BookCopy, type: 'Article' },
        { title: 'When to Start Looking for Tenants', description: 'Timing strategies for warehouse leasing.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/when-to-start-looking-for-tenants-in.html', icon: BookCopy, type: 'Article' },
        { title: 'Focus on Essential Specs for Warehouses', description: 'Key specifications for standalone warehouse success.', url: 'https://lakshmibalajio2o.blogspot.com/2024/10/focus-on-essential-specs-for-standalone.html', icon: BookCopy, type: 'Article' },
    ]
  },
];
