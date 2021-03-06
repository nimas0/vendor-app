import deepCopy from '../utils/deepCopy';

const properties = [
  {
    id: '5ecb868ada8deedee0638502',
    isLiked: true,
    likes: 7,
    image:
      'https://photos.zillowstatic.com/fp/4ff708ca92c1936b1ed0fc58fd7b5f4d-uncropped_scaled_within_1536_1152.webp',
    showings: 2,
    address: {
      street_number: '15573',
      street_pre_direction: 'SW',
      street_name: '32',
      street_suffix: 'TER',
      street_post_direction: null,
      unit_type: null,
      unit_number: null,
      formatted_street_address: '15573 SW 32 TER',
      city: 'MIAMI',
      state: 'FL',
      zip_code: '33185',
      zip_plus_four_code: '4728',
      carrier_code: 'R052',
      latitude: 25.736849,
      longitude: -80.447847,
      geocoding_accuracy: 'PARCEL CENTROID',
      census_tract: '120860152.001024',
    },
    parcel: {
      apn_original: '30-4916-006-0810',
      apn_unformatted: '3049160060810',
      apn_previous: null,
      fips_code: '12086',
      frontage_ft: null,
      depth_ft: null,
      area_sq_ft: 7092,
      area_acres: 0.163,
      county_name: 'MIAMI-DADE',
      county_land_use_code: '0105',
      county_land_use_description: 'CLUSTER HOME',
      standardized_land_use_category: 'MULTI-FAMILY RESIDENTIAL',
      standardized_land_use_type: 'CLUSTER HOME',
      location_descriptions: [],
      zoning: '3700:MULTI-FAM,10-21 U/A',
      building_count: null,
      tax_account_number: null,
      legal_description:
        'CARIBE LAKES PH III PB 151-46 T-19168 LOT 39 BLK 30 LOT SIZE 7092 SQ FT FAU 30-4916-000-0290 0750 & 005- 2180',
      lot_code: null,
      lot_number: '39',
      subdivision: 'CARIBE LAKES PH III',
      municipality: 'UNINCORPORATED COUNTY',
      section_township_range: 'SEC 16 TWN 54S RNG 39E',
    },
    boundary: {
      wkt: 'MULTIPOLYGON(((-80.44792628846739 25.7370374588117,-80.4477759874718 25.73704230525823,-80.44776545101473 25.736767735042974,-80.44776102275296 25.736652245005132,-80.44790993789326 25.73664750647731,-80.44792628846739 25.7370374588117)))',
      geojson: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-80.44792628846739, 25.7370374588117],
              [-80.4477759874718, 25.73704230525823],
              [-80.44776545101473, 25.736767735042974],
              [-80.44776102275296, 25.736652245005132],
              [-80.44790993789326, 25.73664750647731],
              [-80.44792628846739, 25.7370374588117],
            ],
          ],
        ],
      },
    },
    structure: {
      year_built: 2000,
      effective_year_built: null,
      stories: '2',
      rooms_count: null,
      beds_count: 4,
      baths: 3.0,
      partial_baths_count: null,
      units_count: null,
      parking_type: null,
      parking_spaces_count: null,
      pool_type: null,
      architecture_type: null,
      construction_type: null,
      exterior_wall_type: 'STUCCO',
      foundation_type: null,
      roof_material_type: null,
      roof_style_type: 'RIGID FRAME BAR JOIST',
      heating_type: null,
      heating_fuel_type: null,
      air_conditioning_type: null,
      fireplaces: null,
      basement_type: null,
      quality: null,
      condition: null,
      flooring_types: [],
      plumbing_fixtures_count: null,
      interior_wall_type: null,
      water_type: null,
      sewer_type: null,
      total_area_sq_ft: 2373,
      other_areas: [
        {
          type: 'ADJUSTED AREA',
          sq_ft: '2414',
        },
        {
          type: 'TOTAL AREA',
          sq_ft: '2859',
        },
      ],
      other_rooms: [],
      other_features: [
        {
          type: 'WOOD FENCE',
          sq_ft: '63',
        },
      ],
      other_improvements: [
        {
          type: 'PATIO',
          sq_ft: '370',
        },
      ],
      amenities: [],
    },
    valuation: {
      value: 616000,
      high: 671440,
      low: 560560,
      forecast_standard_deviation: 9,
      date: '2022-01-05',
    },
    taxes: [
      {
        year: 2021,
        amount: 6650,
        exemptions: [],
        rate_code_area: '3000',
      },
    ],
    assessments: [
      {
        year: 2020,
        land_value: 109728,
        improvement_value: 218248,
        total_value: 327976,
      },
      {
        year: 2019,
        land_value: 97536,
        improvement_value: 220938,
        total_value: 318474,
      },
      {
        year: 2018,
        land_value: 109118,
        improvement_value: 223627,
        total_value: 332745,
      },
    ],
    market_assessments: [
      {
        year: 2020,
        land_value: 109728,
        improvement_value: 218248,
        total_value: 327976,
      },
    ],
    owner: {
      name: 'WILSON A CRESPO',
      second_name: null,
      unit_type: null,
      unit_number: null,
      formatted_street_address: '15573 SW 32ND TER',
      city: 'MIAMI',
      state: 'FL',
      zip_code: '33185',
      zip_plus_four_code: '4728',
      owner_occupied: 'YES',
    },
    deeds: [
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2009-02-23',
        original_contract_date: '2009-02-17',
        deed_book: '26762',
        deed_page: '1731',
        document_id: '2009R0131423',
        sale_price: 380000,
        sale_price_description:
          'SALES PRICE OR TRANSFER TAX ROUNDED BY COUNTY PRIOR TO COMPUTATION',
        transfer_tax: 2280.0,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: 'SARA I',
        seller_last_name: 'VALENCIA',
        seller2_first_name: null,
        seller2_last_name: null,
        seller_address: null,
        seller_unit_number: null,
        seller_city: null,
        seller_state: null,
        seller_zip_code: null,
        seller_zip_plus_four_code: null,
        buyer_first_name: 'WILSON ANDRES',
        buyer_last_name: 'CRESPO',
        buyer2_first_name: null,
        buyer2_last_name: null,
        buyer_address: '15573 SW 32ND TER',
        buyer_unit_type: null,
        buyer_unit_number: null,
        buyer_city: 'MIAMI',
        buyer_state: 'FL',
        buyer_zip_code: '33185',
        buyer_zip_plus_four_code: '4728',
        lender_name: 'DBA LIFE MORTGAGE GROUP',
        lender_type: 'NOT KNOWN',
        loan_amount: 304000,
        loan_type: 'UNKNOWN',
        loan_due_date: '2039-03-01',
        loan_finance_type: null,
        loan_interest_rate: null,
      },
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2000-07-28',
        original_contract_date: null,
        deed_book: '19215',
        deed_page: '03374',
        document_id: null,
        sale_price: 163000,
        sale_price_description: 'FULL AMOUNT STATED ON DOCUMENT',
        transfer_tax: 978.0,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: 'CARIBE CENTURY JOINT VENTURE',
        seller_last_name: null,
        seller2_first_name: null,
        seller2_last_name: null,
        seller_address: null,
        seller_unit_number: null,
        seller_city: null,
        seller_state: null,
        seller_zip_code: null,
        seller_zip_plus_four_code: null,
        buyer_first_name: 'SARA I',
        buyer_last_name: 'VALENCIA',
        buyer2_first_name: null,
        buyer2_last_name: null,
        buyer_address: '6215 SW KENDALE LAKES CIR',
        buyer_unit_type: 'APT',
        buyer_unit_number: '264',
        buyer_city: 'MIAMI',
        buyer_state: 'FL',
        buyer_zip_code: '33183',
        buyer_zip_plus_four_code: '1967',
        lender_name: null,
        lender_type: null,
        loan_amount: null,
        loan_type: null,
        loan_due_date: null,
        loan_finance_type: null,
        loan_interest_rate: null,
      },
    ],
  },
  {
    id: '15e849c5a35d4dff4f88ebff6',
    isLiked: true,
    likes: 12,
    image:
      'https://photos.zillowstatic.com/fp/4c468ea5f07030f011ecb86f8cbbfbca-cc_ft_768.webp',
    rating: 4.5,
    showings: 3,
    address: {
      street_number: '10914',
      street_pre_direction: 'SW',
      street_name: '26',
      street_suffix: 'ST',
      street_post_direction: null,
      unit_type: null,
      unit_number: null,
      formatted_street_address: '10914 SW 26 ST',
      city: 'MIAMI',
      state: 'FL',
      zip_code: '33165',
      zip_plus_four_code: '2302',
      carrier_code: 'C006',
      latitude: 25.74422,
      longitude: -80.372665,
      geocoding_accuracy: 'PARCEL CENTROID',
      census_tract: '120860088.033033',
    },
    parcel: {
      apn_original: '30-4018-000-0241',
      apn_unformatted: '3040180000241',
      apn_previous: null,
      fips_code: '12086',
      frontage_ft: null,
      depth_ft: null,
      area_sq_ft: 22415,
      area_acres: 0.515,
      county_name: 'MIAMI-DADE',
      county_land_use_code: '0101',
      county_land_use_description: 'SINGLE FAMILY RESIDENCE',
      standardized_land_use_category: 'RESIDENTIAL',
      standardized_land_use_type: 'SINGLE FAMILY RESIDENTIAL',
      location_descriptions: [],
      zoning: '2100:ESTATES,15000 SQ LOT',
      building_count: null,
      tax_account_number: null,
      legal_description:
        '18 54 40 0.51 AC M/L W134FT OF N1/2 OF E1/2 OF SE1/4 OF NW1/4 OF NE1/4 LESS N190FT OF E108.90FT',
      lot_code: null,
      lot_number: null,
      subdivision: null,
      municipality: 'UNINCORPORATED COUNTY',
      section_township_range: 'SEC 18 TWN 54S RNG 40E',
    },
    boundary: {
      wkt: 'MULTIPOLYGON(((-80.37276979848735 25.74476878205371,-80.37270766792449 25.74476957345712,-80.37243166329057 25.744773088007662,-80.37242971266107 25.744522357021197,-80.37242908853159 25.744441998099774,-80.37242809747869 25.744314541682797,-80.37276740629073 25.744314562367208,-80.37276979848735 25.74476878205371)))',
      geojson: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-80.37276979848735, 25.74476878205371],
              [-80.37270766792449, 25.74476957345712],
              [-80.37243166329057, 25.744773088007662],
              [-80.37242971266107, 25.744522357021197],
              [-80.37242908853159, 25.744441998099774],
              [-80.37242809747869, 25.744314541682797],
              [-80.37276740629073, 25.744314562367208],
              [-80.37276979848735, 25.74476878205371],
            ],
          ],
        ],
      },
    },
    structure: {
      year_built: 2018,
      effective_year_built: null,
      stories: '1',
      rooms_count: null,
      beds_count: 5,
      baths: 6.0,
      partial_baths_count: null,
      units_count: null,
      parking_type: null,
      parking_spaces_count: null,
      pool_type: null,
      architecture_type: null,
      construction_type: null,
      exterior_wall_type: 'STUCCO',
      foundation_type: null,
      roof_material_type: null,
      roof_style_type: 'RIGID FRAME BAR JOIST',
      heating_type: null,
      heating_fuel_type: null,
      air_conditioning_type: null,
      fireplaces: null,
      basement_type: null,
      quality: null,
      condition: null,
      flooring_types: [],
      plumbing_fixtures_count: null,
      interior_wall_type: null,
      water_type: null,
      sewer_type: null,
      total_area_sq_ft: 3702,
      other_areas: [
        {
          type: 'ADJUSTED AREA',
          sq_ft: '4320',
        },
        {
          type: 'TOTAL AREA',
          sq_ft: '4791',
        },
      ],
      other_rooms: [],
      other_features: [
        {
          type: 'METAL FENCE',
          sq_ft: '160',
        },
      ],
      other_improvements: [
        {
          type: 'PATIO',
          sq_ft: '40',
        },
      ],
      amenities: [],
    },
    valuation: {
      value: 1186000,
      high: 1352040,
      low: 1019960,
      forecast_standard_deviation: 14,
      date: '2022-01-05',
    },
    taxes: [
      {
        year: 2021,
        amount: 13978,
        exemptions: [],
        rate_code_area: '3000',
      },
    ],
    assessments: [
      {
        year: 2020,
        land_value: 251524,
        improvement_value: 501985,
        total_value: 753509,
      },
      {
        year: 2019,
        land_value: 215592,
        improvement_value: 589080,
        total_value: 804672,
      },
      {
        year: 2018,
        land_value: 195829,
        improvement_value: null,
        total_value: 195829,
      },
    ],
    market_assessments: [
      {
        year: 2020,
        land_value: 251524,
        improvement_value: 501985,
        total_value: 753509,
      },
    ],
    owner: {
      name: 'ROSA A NUNEZ',
      second_name: null,
      unit_type: null,
      unit_number: null,
      formatted_street_address: '10914 SW 26TH ST',
      city: 'MIAMI',
      state: 'FL',
      zip_code: '33165',
      zip_plus_four_code: '2302',
      owner_occupied: 'YES',
    },
    deeds: [
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2019-10-18',
        original_contract_date: '2019-09-27',
        deed_book: '31652',
        deed_page: '2629',
        document_id: '2019R0652671',
        sale_price: 1185000,
        sale_price_description:
          'SALES PRICE OR TRANSFER TAX ROUNDED BY COUNTY PRIOR TO COMPUTATION',
        transfer_tax: 7110.0,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: 'ADAM',
        seller_last_name: 'FREEDMAN',
        seller2_first_name: 'TIFFANY',
        seller2_last_name: 'FREEDMAN',
        seller_address: '13686 SW 117TH LN',
        seller_unit_number: null,
        seller_city: 'MIAMI',
        seller_state: 'FL',
        seller_zip_code: '33186',
        seller_zip_plus_four_code: '4438',
        buyer_first_name: 'ROSA A',
        buyer_last_name: 'NUNEZ',
        buyer2_first_name: null,
        buyer2_last_name: null,
        buyer_address: '10914 SW 26TH ST',
        buyer_unit_type: null,
        buyer_unit_number: null,
        buyer_city: 'MIAMI',
        buyer_state: 'FL',
        buyer_zip_code: '33165',
        buyer_zip_plus_four_code: '2302',
        lender_name: 'PRIMARY RESIDENTIAL MORTGAGE INC',
        lender_type: 'MORTGAGE COMPANY',
        loan_amount: 484350,
        loan_type: 'NEW CONVENTIONAL',
        loan_due_date: '2049-10-01',
        loan_finance_type: null,
        loan_interest_rate: null,
      },
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2018-06-27',
        original_contract_date: '2018-06-14',
        deed_book: '31031',
        deed_page: '3290',
        document_id: '2018R0378470',
        sale_price: 1075000,
        sale_price_description:
          'SALES PRICE OR TRANSFER TAX ROUNDED BY COUNTY PRIOR TO COMPUTATION',
        transfer_tax: 6450.0,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: null,
        seller_last_name: 'CG 26 DEVELOPMENT INC',
        seller2_first_name: null,
        seller2_last_name: null,
        seller_address: '14850 SW 26TH ST',
        seller_unit_number: '210',
        seller_city: 'MIAMI',
        seller_state: 'FL',
        seller_zip_code: '33185',
        seller_zip_plus_four_code: '5932',
        buyer_first_name: 'ADAM',
        buyer_last_name: 'FREEDMAN',
        buyer2_first_name: 'TIFFANY',
        buyer2_last_name: 'FREEDMAN',
        buyer_address: '10914 SW 26TH ST',
        buyer_unit_type: null,
        buyer_unit_number: null,
        buyer_city: 'MIAMI',
        buyer_state: 'FL',
        buyer_zip_code: '33165',
        buyer_zip_plus_four_code: null,
        lender_name: 'JPMORGAN CHASE BANK NA',
        lender_type: 'BANK',
        loan_amount: 850825,
        loan_type: 'NEW CONVENTIONAL',
        loan_due_date: '2048-07-01',
        loan_finance_type: null,
        loan_interest_rate: null,
      },
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2016-08-15',
        original_contract_date: '2016-07-22',
        deed_book: '30192',
        deed_page: '3415',
        document_id: '2016R0476811',
        sale_price: 479000,
        sale_price_description:
          'SALES PRICE OR TRANSFER TAX ROUNDED BY COUNTY PRIOR TO COMPUTATION',
        transfer_tax: 2874.0,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: 'JUDITH A',
        seller_last_name: 'MULLEN VARGAS',
        seller2_first_name: 'MARGARET M',
        seller2_last_name: 'DEGLING',
        seller_address: '16400 COLLINS AVE',
        seller_unit_number: '746',
        seller_city: 'SUNNY ISLES BEACH',
        seller_state: 'FL',
        seller_zip_code: '33160',
        seller_zip_plus_four_code: '4568',
        buyer_first_name: null,
        buyer_last_name: 'CG 26 DEVELOPMENT INC',
        buyer2_first_name: null,
        buyer2_last_name: null,
        buyer_address: '14850 SW 26TH ST',
        buyer_unit_type: 'STE',
        buyer_unit_number: '210',
        buyer_city: 'MIAMI',
        buyer_state: 'FL',
        buyer_zip_code: '33185',
        buyer_zip_plus_four_code: '5932',
        lender_name: null,
        lender_type: null,
        loan_amount: null,
        loan_type: null,
        loan_due_date: null,
        loan_finance_type: null,
        loan_interest_rate: null,
      },
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2001-04-30',
        original_contract_date: null,
        deed_book: '19632',
        deed_page: '04273',
        document_id: null,
        sale_price: 100,
        sale_price_description: 'FULL AMOUNT STATED ON DOCUMENT',
        transfer_tax: 0.6,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: 'MARY       M MULLEN                I',
        seller_last_name: null,
        seller2_first_name: null,
        seller2_last_name: null,
        seller_address: null,
        seller_unit_number: null,
        seller_city: null,
        seller_state: null,
        seller_zip_code: null,
        seller_zip_plus_four_code: null,
        buyer_first_name: null,
        buyer_last_name: 'FLYNN MARY M TRUST',
        buyer2_first_name: null,
        buyer2_last_name: null,
        buyer_address: null,
        buyer_unit_type: null,
        buyer_unit_number: null,
        buyer_city: null,
        buyer_state: null,
        buyer_zip_code: null,
        buyer_zip_plus_four_code: null,
        lender_name: null,
        lender_type: null,
        loan_amount: null,
        loan_type: null,
        loan_due_date: null,
        loan_finance_type: null,
        loan_interest_rate: null,
      },
    ],
  },
  {
    id: '5e849c9e34ee93bc7255c599',
    isLiked: true,
    likes: 18,
    image:
      'https://photos.zillowstatic.com/fp/43e9757b30f648ee139dc49d775b7f2a-uncropped_scaled_within_1536_1152.webp',
    rating: 4.7,
    showings: 8,
    address: {
      street_number: '14993',
      street_pre_direction: 'SW',
      street_name: '18',
      street_suffix: 'TER',
      street_post_direction: null,
      unit_type: null,
      unit_number: null,
      formatted_street_address: '14993 SW 18 TER',
      city: 'MIAMI',
      state: 'FL',
      zip_code: '33185',
      zip_plus_four_code: '5785',
      carrier_code: 'R057',
      latitude: 25.749839,
      longitude: -80.438119,
      geocoding_accuracy: 'PARCEL CENTROID',
      census_tract: '120860151.003033',
    },
    parcel: {
      apn_original: '30-4909-007-0680',
      apn_unformatted: '3049090070680',
      apn_previous: null,
      fips_code: '12086',
      frontage_ft: null,
      depth_ft: null,
      area_sq_ft: 5821,
      area_acres: 0.134,
      county_name: 'MIAMI-DADE',
      county_land_use_code: '0105',
      county_land_use_description: 'CLUSTER HOME',
      standardized_land_use_category: 'MULTI-FAMILY RESIDENTIAL',
      standardized_land_use_type: 'CLUSTER HOME',
      location_descriptions: [],
      zoning: 'INTERIM-AWAIT SPECIFIC',
      building_count: null,
      tax_account_number: null,
      legal_description:
        'GRAND LAKES PHASE III PB 161-34 T-21233 LOT 1 BLK 49 LOT SIZE 5821 SQ FT FAU 30 4909 000 0050 COC 23459-3465 04 2005 1',
      lot_code: null,
      lot_number: '1',
      subdivision: 'GRAND LAKES PHASE III',
      municipality: 'UNINCORPORATED COUNTY',
      section_township_range: 'SEC 09 TWN 54S RNG 39E',
    },
    boundary: {
      wkt: 'MULTIPOLYGON(((-80.43820765685786 25.74990970077215,-80.43820750037582 25.74991522440814,-80.43820692121238 25.749920354141068,-80.43820614509747 25.749924419976026,-80.43820499666322 25.74992876460084,-80.438202703392 25.749935134498912,-80.43819965379095 25.7499414288539,-80.43819592610106 25.749947415640747,-80.43819261030069 25.749951812426275,-80.43818952652538 25.749955300896488,-80.4381854040331 25.749959339751797,-80.43818123567547 25.74996285160438,-80.43817738477844 25.749965643999303,-80.43817367327637 25.74996803619598,-80.43816979360105 25.74997019816618,-80.4381654471776 25.74997231876756,-80.43816025179416 25.74997442497977,-80.43815398981474 25.74997643136726,-80.43814904624145 25.749977653545898,-80.43814420698953 25.74997852139171,-80.43813685593113 25.74997929301003,-80.43803419831954 25.749982598018562,-80.43802305302142 25.74969397589632,-80.43812479422382 25.74969079319561,-80.43812975668288 25.74969086873864,-80.43813561396735 25.749691358869143,-80.43814178961185 25.749692302257984,-80.43814621427634 25.749693287914965,-80.43815288364863 25.749695281711922,-80.43815983181076 25.749698044429238,-80.43816531587657 25.749700780166904,-80.43817037726109 25.749703821674075,-80.43817585952826 25.749707789482954,-80.4381806753978 25.749711931760316,-80.43818470076332 25.749716047957293,-80.43818748956096 25.749719309798365,-80.4381900283471 25.749722734416707,-80.43819236388646 25.74972627504758,-80.4381944332265 25.749729951476127,-80.43819628403122 25.749733719635515,-80.43819785154955 25.749737594814178,-80.43819928327025 25.74974186929188,-80.43820046857672 25.74974656285366,-80.4382012338998 25.74975097672626,-80.43820173841948 25.749756111855106,-80.43820765685786 25.74990970077215)))',
      geojson: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-80.43820765685786, 25.74990970077215],
              [-80.43820750037582, 25.74991522440814],
              [-80.43820692121238, 25.749920354141068],
              [-80.43820614509747, 25.749924419976026],
              [-80.43820499666322, 25.74992876460084],
              [-80.438202703392, 25.749935134498912],
              [-80.43819965379095, 25.7499414288539],
              [-80.43819592610106, 25.749947415640747],
              [-80.43819261030069, 25.749951812426275],
              [-80.43818952652538, 25.749955300896488],
              [-80.4381854040331, 25.749959339751797],
              [-80.43818123567547, 25.74996285160438],
              [-80.43817738477844, 25.749965643999303],
              [-80.43817367327637, 25.74996803619598],
              [-80.43816979360105, 25.74997019816618],
              [-80.4381654471776, 25.74997231876756],
              [-80.43816025179416, 25.74997442497977],
              [-80.43815398981474, 25.74997643136726],
              [-80.43814904624145, 25.749977653545898],
              [-80.43814420698953, 25.74997852139171],
              [-80.43813685593113, 25.74997929301003],
              [-80.43803419831954, 25.749982598018562],
              [-80.43802305302142, 25.74969397589632],
              [-80.43812479422382, 25.74969079319561],
              [-80.43812975668288, 25.74969086873864],
              [-80.43813561396735, 25.749691358869143],
              [-80.43814178961185, 25.749692302257984],
              [-80.43814621427634, 25.749693287914965],
              [-80.43815288364863, 25.749695281711922],
              [-80.43815983181076, 25.749698044429238],
              [-80.43816531587657, 25.749700780166904],
              [-80.43817037726109, 25.749703821674075],
              [-80.43817585952826, 25.749707789482954],
              [-80.4381806753978, 25.749711931760316],
              [-80.43818470076332, 25.749716047957293],
              [-80.43818748956096, 25.749719309798365],
              [-80.4381900283471, 25.749722734416707],
              [-80.43819236388646, 25.74972627504758],
              [-80.4381944332265, 25.749729951476127],
              [-80.43819628403122, 25.749733719635515],
              [-80.43819785154955, 25.749737594814178],
              [-80.43819928327025, 25.74974186929188],
              [-80.43820046857672, 25.74974656285366],
              [-80.4382012338998, 25.74975097672626],
              [-80.43820173841948, 25.749756111855106],
              [-80.43820765685786, 25.74990970077215],
            ],
          ],
        ],
      },
    },
    structure: {
      year_built: 2004,
      effective_year_built: null,
      stories: '2',
      rooms_count: null,
      beds_count: 4,
      baths: 3.0,
      partial_baths_count: null,
      units_count: null,
      parking_type: null,
      parking_spaces_count: null,
      pool_type: null,
      architecture_type: null,
      construction_type: null,
      exterior_wall_type: 'STUCCO',
      foundation_type: null,
      roof_material_type: null,
      roof_style_type: 'RIGID FRAME BAR JOIST',
      heating_type: null,
      heating_fuel_type: null,
      air_conditioning_type: null,
      fireplaces: null,
      basement_type: null,
      quality: null,
      condition: null,
      flooring_types: [],
      plumbing_fixtures_count: null,
      interior_wall_type: null,
      water_type: null,
      sewer_type: null,
      total_area_sq_ft: 3043,
      other_areas: [
        {
          type: 'ADJUSTED AREA',
          sq_ft: '3120',
        },
        {
          type: 'TOTAL AREA',
          sq_ft: '3713',
        },
      ],
      other_rooms: [],
      other_features: [
        {
          type: 'CHAIN-LINK FENCE',
          sq_ft: '102',
        },
        {
          type: 'CHAIN-LINK FENCE',
          sq_ft: '108',
        },
      ],
      other_improvements: [
        {
          type: 'PATIO',
          sq_ft: '582',
        },
      ],
      amenities: [],
    },
    valuation: {
      value: 709000,
      high: 765720,
      low: 652280,
      forecast_standard_deviation: 8,
      date: '2022-01-05',
    },
    taxes: [
      {
        year: 2021,
        amount: 6071,
        exemptions: ['HOMESTEAD'],
        rate_code_area: '3000',
      },
    ],
    assessments: [
      {
        year: 2020,
        land_value: null,
        improvement_value: null,
        total_value: 318572,
      },
      {
        year: 2019,
        land_value: null,
        improvement_value: null,
        total_value: 311410,
      },
      {
        year: 2018,
        land_value: null,
        improvement_value: null,
        total_value: 305604,
      },
    ],
    market_assessments: [
      {
        year: 2020,
        land_value: 105174,
        improvement_value: 299584,
        total_value: 404758,
      },
    ],
    owner: {
      name: 'JOSUE C RAUDALES; MARIA L TEDIN',
      second_name: null,
      unit_type: null,
      unit_number: null,
      formatted_street_address: '14993 SW 18TH TER',
      city: 'MIAMI',
      state: 'FL',
      zip_code: '33185',
      zip_plus_four_code: '5785',
      owner_occupied: 'YES',
    },
    deeds: [
      {
        document_type: 'WARRANTY DEED',
        recording_date: '2005-06-09',
        original_contract_date: '2005-04-25',
        deed_book: '23459',
        deed_page: '3465',
        document_id: '2005R0595690',
        sale_price: 416000,
        sale_price_description:
          'SALES PRICE OR TRANSFER TAX ROUNDED BY COUNTY PRIOR TO COMPUTATION',
        transfer_tax: 2496.0,
        distressed_sale: false,
        real_estate_owned: 'NO',
        seller_first_name: null,
        seller_last_name: 'GRAND LAKES DEVELOPMENT CORP',
        seller2_first_name: null,
        seller2_last_name: null,
        seller_address: '5835 BLUE LAGOON DR',
        seller_unit_number: '400',
        seller_city: 'MIAMI',
        seller_state: 'FL',
        seller_zip_code: '33126',
        seller_zip_plus_four_code: '2067',
        buyer_first_name: 'JOSUE C',
        buyer_last_name: 'RAUDALES',
        buyer2_first_name: 'MARIA L',
        buyer2_last_name: 'TEDIN',
        buyer_address: '14993 SW 18TH TER',
        buyer_unit_type: null,
        buyer_unit_number: null,
        buyer_city: 'MIAMI',
        buyer_state: 'FL',
        buyer_zip_code: '33185',
        buyer_zip_plus_four_code: '5785',
        lender_name: 'AMERICAN BANCSHARES MORTGAGE CORP',
        lender_type: 'NOT KNOWN',
        loan_amount: 291150,
        loan_type: 'FANNIE MAE OR FREDDIE MAC',
        loan_due_date: '2035-05-01',
        loan_finance_type: null,
        loan_interest_rate: null,
      },
    ],
  },
];

class PropertiesApi {
  getProperties() {
    return Promise.resolve(deepCopy(properties));
  }
}

export const propertyApi = new PropertiesApi();
