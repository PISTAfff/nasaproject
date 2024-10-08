import { useEffect, useState } from 'react'
import "./mapPage.css"
import toast from 'react-hot-toast';
import axios from 'axios';
import jQuery from 'jquery';
const MapPage = () => {
    const [curIcons, setCurIcons] = useState([["fa-solid fa-temperature-full", false], ["fa-solid fa-droplet", false], ["fa-solid fa-wind", false], ["fa-solid fa-cloud-rain", false], ["fa-solid fa-gauge", false], ["fa-solid fa-car", false], ["fa-solid fa-person", false], ["fa-solid fa-leaf", false], ["fa-solid fa-house-crack", false]]);
    const [report, setReport] = useState("");
    const [curGov, setCurGov] = useState("");
    const [IconsState, setIconsState] = useState(-1);
    const Icons = [
        ["fa-regular  fa-snowflake", false, "fa-solid  fa-fire", false],
        ["fa-solid fa-droplet", false, "fa-solid fa-droplet-slash", false],
        ["fa-solid fa-wind", false, "fa-solid fa-window-minimize", false],
        ["fa-solid fa-cloud-rain", false, "fa-solid fa-cloud", false],
        ["fa-solid fa-gauge", false, "fa-solid fa-gauge-high", false],
        ["fa-solid fa-car", true, "fa-solid fa-car", false],
        ["fa-solid fa-person", true, "fa-solid fa-person", false],
        ["fa-solid fa-leaf", true, "fa-solid fa-leaf", false],
        ["fa-solid fa-house", false, "fa-solid fa-house-crack", false],
    ]
    const $ = jQuery;
    const data = [
        ["Cairo", [30, 50, 12, 3, 1015, 9000000, 20000000, 15, 15]],
        ["Alexandria", [28, 60, 15, 50, 1012, 5000000, 6000000, 11, 10]],
        ["Giza", [32, 45, 10, 2, 1018, 3000000, 8000000, 15, 12]],
        ["Aswan", [40, 20, 5, 1, 1020, 500000, 1500000, 15, 8]],
        ["Luxor", [38, 25, 8, 1, 1017, 600000, 1200000, 15, 7]],
        ["PortSaid", [26, 65, 20, 70, 1009, 700000, 750000, 8, 12]],
        ["Suez", [30, 55, 18, 25, 1013, 600000, 500000, 13, 10]],
        ["Ismailia", [29, 50, 14, 30, 1011, 700000, 1200000, 18, 9]],
        ["Damietta", [27, 62, 16, 45, 1010, 450000, 1300000, 15, 10]],
        ["Beheira", [29, 48, 12, 25, 1015, 1200000, 6000000, 14, 8]],
        ["Sharqia", [31, 55, 13, 15, 1014, 800000, 7500000, 13, 11]],
        ["Monufia", [30, 57, 11, 20, 1016, 600000, 4200000, 12, 10]],
        ["Dakahlia", [28, 63, 17, 40, 1008, 700000, 6200000, 13, 9]],
        ["KafrElSheikh", [27, 60, 15, 50, 1012, 500000, 3500000, 14, 10]],
        ["Gharbia", [30, 52, 13, 25, 1017, 800000, 5000000, 11, 8]],
        ["Fayoum", [33, 45, 12, 10, 1018, 600000, 3600000, 25, 7]],
        ["BeniSuef", [34, 40, 10, 7, 1019, 400000, 2800000, 9, 6]],
        ["Minya", [35, 35, 9, 5, 1021, 600000, 5000000, 10, 5]],
        ["Qena", [39, 28, 8, 2, 1016, 400000, 3500000, 14, 5]],
        ["Sohag", [38, 30, 7, 3, 1022, 1200000, 4500000, 16, 4]],
        ["Matruh", [25, 65, 22, 60, 1007, 200000, 500000, 13, 15]],
        ["NorthSinai", [27, 60, 19, 20, 1010, 250000, 450000, 10, 5]],
        ["SouthSinai", [31, 48, 14, 5, 1015, 200000, 250000, 14, 3]],
        ["RedSea", [34, 38, 20, 2, 1012, 300000, 370000, 13, 6]],
        ["NewValley", [36, 32, 6, 1, 1023, 100000, 240000, 5, 2]],
        ["Qalyubia", [29, 53, 12, 20, 1014, 800000, 6000000, 14, 8]],
        ["Assiut", [37, 33, 10, 3, 1020, 600000, 4000000, 10, 4]],
    ];
    const rawdata = {
        "Cairo": [30, 50, 12, 3, 1015, 9000000, 20000000, 15, 15],
        "Alexandria": [28, 60, 15, 50, 1012, 5000000, 6000000, 11, 10],
        "Giza": [32, 45, 10, 2, 1018, 3000000, 8000000, 15, 12],
        "Aswan": [40, 20, 5, 1, 1020, 500000, 1500000, 15, 8],
        "Luxor": [38, 25, 8, 1, 1017, 600000, 1200000, 15, 7],
        "Port Said": [26, 65, 20, 70, 1009, 700000, 750000, 8, 12],
        "Suez": [30, 55, 18, 25, 1013, 600000, 500000, 13, 10],
        "Ismailia": [29, 50, 14, 30, 1011, 700000, 1200000, 18, 9],
        "Damietta": [27, 62, 16, 45, 1010, 450000, 1300000, 15, 10],
        "Beheira": [29, 48, 12, 25, 1015, 1200000, 6000000, 14, 8],
        "Sharqia": [31, 55, 13, 15, 1014, 800000, 7500000, 13, 11],
        "Monufia": [30, 57, 11, 20, 1016, 600000, 4200000, 12, 10],
        "Dakahlia": [28, 63, 17, 40, 1008, 700000, 6200000, 13, 9],
        "Kafr El Sheikh": [27, 60, 15, 50, 1012, 500000, 3500000, 14, 10],
        "Gharbia": [30, 52, 13, 25, 1017, 800000, 5000000, 11, 8],
        "Fayoum": [33, 45, 12, 10, 1018, 600000, 3600000, 25, 7],
        "Beni Suef": [34, 40, 10, 7, 1019, 400000, 2800000, 9, 6],
        "Minya": [35, 35, 9, 5, 1021, 600000, 5000000, 10, 5],
        "Qena": [39, 28, 8, 2, 1016, 400000, 3500000, 14, 5],
        "Sohag": [38, 30, 7, 3, 1022, 1200000, 4500000, 16, 4],
        "Matruh": [25, 65, 22, 60, 1007, 200000, 500000, 13, 15],
        "North Sinai": [27, 60, 19, 20, 1010, 250000, 450000, 10, 5],
        "South Sinai": [31, 48, 14, 5, 1015, 200000, 250000, 14, 3],
        "Red Sea": [34, 38, 20, 2, 1012, 300000, 370000, 13, 6],
        "New Valley": [36, 32, 6, 1, 1023, 100000, 240000, 5, 2],
        "Qalyubia": [29, 53, 12, 20, 1014, 800000, 6000000, 14, 8],
        "Assiut": [37, 33, 10, 3, 1020, 600000, 4000000, 10, 4],
    };
    const [curData, setCurData] = useState([30, 50, 12, 3, 1015, 9000000, 20000000, 15, 15]);
    const [ActivatedGov, setActivatedGov] = useState("");
    useEffect(() => {
        if (ActivatedGov) {
            for (let filter = 0; filter < 9; filter++) {
                const SwitchIT = filter == 1 || filter == 3 || filter == 5 || filter == 6 || filter == 7;
                const max = Math.max(...data.map(g => g[1][filter]));
                const min = Math.min(...data.map(g => g[1][filter]));
                const value = rawdata[ActivatedGov][filter];
                const ratio = (value - min) / (max - min);
                const r = Math.round(Math.max(0, Math.min(255, 255 - ratio * 255)));
                const g = Math.round(Math.max(0, Math.min(255, ratio * 255)));
                $("#" + dataorder[filter][1]).attr("style", `background-Color: rgba(${SwitchIT ? r : g},${(SwitchIT ? g : r) + (filter == 5 || filter == 6 ? 50 : 0)}, 0,.6)`);
            }
            setCurData(rawdata[ActivatedGov]);
        }
    }, [ActivatedGov, report]);
    function getRandomReport() {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => setActivatedGov(Object.keys(rawdata)[Math.floor(Math.random() * Object.keys(rawdata).length)]), i * 50);
        }
    }
    const dataorder = [["°C", "temp"], ["%", "humi"], ["%", "wind"], [" days/year", "rain"], [" Pa", "press"], ["", "cars"], ["", "ppl"], ["%", "gs"], [" times/year", "quake"]]
    async function CreateReport(GovernorateName) {
        let d = data.filter(g => g[0] == GovernorateName)[0];
        try {
            throw new Error();
            // const apiUrl = 'https://api.openai.com/v1/chat/completions';
            // const apiKey = 'Stopped Temporarly';

            // const headers = {
            //     'Content-Type': 'application/json',
            //     'Authorization': `Bearer ${apiKey}`,
            // };

            // const requestBody = {
            //     model: 'gpt-3',
            //     messages: [
            //         {
            //             role: 'user',
            //             content: `I want you to create a report for ${GovernorateName}. The report must be in this format: ["a small desc", ["positive1", "positive2", "positive3"], ["negative1", "negative2"]]. Please make sure to only answer in this format, and use this data: ${JSON.stringify(d)}. The format of this data is: [GovernorateName, [temp, humidity, wind, raindaysperyear, pressure, cars, population, greenspacepercentage, earthquakepercentage]].`
            //         }
            //     ]
            // };
            // const response = await axios.post(apiUrl, requestBody, { headers });
            // setReport(JSON.parse(response.data.choices[0].message.content));
        } catch (error) {
            let reports = {
                "Cairo": ["Cairo, the bustling capital of Egypt, is a vibrant metropolis rich in history and culture. Known for its iconic landmarks like the Pyramids and the Sphinx, it offers a lively atmosphere with diverse neighborhoods, museums, and a thriving nightlife.", ["Warm temperatures", "Diverse population", "Cultural landmarks", "Rich culinary scene"], ["High humidity", "Traffic congestion", "Pollution", "Noise levels"]],
                "Alexandria": ["Alexandria, a beautiful coastal city, boasts a blend of Mediterranean charm and significant historical importance. Its stunning waterfront, ancient sites, and vibrant cultural life attract locals and tourists alike, making it a perfect destination for history buffs and beach lovers.", ["Mild temperatures", "Rich cultural heritage", "Beautiful beaches", "Historical landmarks"], ["High humidity", "Limited greenspace", "Traffic congestion", "Overcrowding"]],
                "Giza": ["Giza is home to some of the world's most famous archaeological sites, including the Great Pyramids and the Sphinx. This bustling governorate combines ancient wonders with modern urban life, offering a unique exploration of Egypt's rich history and vibrant culture.", ["Warm temperatures", "Famous archaeological sites", "Rich cultural history", "Tourist attractions"], ["Low humidity", "Limited rainfall", "Traffic congestion", "High tourist volume"]],
                "Aswan": ["Aswan, located in southern Egypt, is renowned for its breathtaking views of the Nile and rich historical sites such as the Temple of Philae. This picturesque governorate provides a unique insight into Egyptian culture and ancient history, making it a popular spot for travelers.", ["Hot temperatures", "Low humidity", "Beautiful landscapes", "Cultural richness"], ["Limited rainfall", "Higher earthquake risk", "Remote areas", "Infrastructure challenges"]],
                "Luxor": ["Often referred to as the world's greatest open-air museum, Luxor is famous for its extraordinary temples and tombs, including the Valley of the Kings. This historical city along the Nile offers deep insights into ancient Egyptian civilization and attracts countless visitors eager to explore its rich heritage.", ["Warm temperatures", "Rich archaeological sites", "Vibrant tourism", "Cultural festivals"], ["Moderate humidity", "Limited rainfall", "Overcrowding during peak seasons", "Rising living costs"]],
                "Port Said": ["Port Said is strategically located at the northern entrance of the Suez Canal, known for its unique blend of cultures and significant maritime history. This vibrant port city features a rich tapestry of cultures, delicious seafood, and a lively atmosphere that attracts both residents and tourists.", ["Mild temperatures", "Cultural diversity", "Strategic location", "Vibrant markets"], ["High humidity", "Frequent rain days", "Traffic congestion", "Limited recreational spaces"]],
                "Suez": ["Suez is a key city at the southern end of the Suez Canal, playing an essential role in international trade. The city boasts modern infrastructure alongside historical sites, making it an important hub for commerce, tourism, and maritime activities.", ["Warm temperatures", "Economic significance", "Historical landmarks", "Strategic transportation hub"], ["Moderate humidity", "Limited greenspace", "Traffic issues", "Environmental concerns"]],
                "Ismailia": ["Situated along the Suez Canal, Ismailia is famous for its beautiful gardens and rich history. This charming city offers a peaceful atmosphere combined with vibrant cultural experiences, making it an attractive spot for both residents and visitors looking for relaxation.", ["Moderate temperatures", "Green spaces", "Cultural richness", "Rich history"], ["Moderate humidity", "Limited rainfall", "Traffic congestion", "Overcrowding during events"]],
                "Damietta": ["Located on the Mediterranean coast, Damietta is renowned for its fertile agricultural land and thriving fishing industry. The city combines beautiful landscapes with a lively cultural scene, attracting both locals and tourists to its bustling markets and coastal charm.", ["Mild temperatures", "Rich agriculture", "Cultural heritage", "Vibrant fishing industry"], ["High humidity", "Frequent rain days", "Traffic congestion", "Limited infrastructure"]],
                "Beheira": ["Beheira, in northern Egypt, is known for its fertile lands and significant agricultural production. This governorate features a mix of rural charm and urban development, offering unique cultural experiences and a strong sense of community.", ["Moderate temperatures", "Fertile land", "Cultural diversity", "Rich agricultural resources"], ["Moderate humidity", "Limited rainfall", "Transportation issues", "Limited recreational activities"]],
                "Sharqia": ["Sharqia is characterized by its vibrant agricultural landscape and rich cultural heritage. The governorate is home to bustling towns and traditional markets, making it a lively place with a strong sense of community and numerous cultural festivals throughout the year.", ["Warm temperatures", "Rich agriculture", "Cultural vibrancy", "Strong community ties"], ["Moderate humidity", "Limited greenspace", "Traffic congestion", "Economic challenges"]],
                "Monufia": ["Situated in the Nile Delta, Monufia is known for its agricultural productivity and rich cultural traditions. This governorate features a blend of rural landscapes and lively communities, providing a unique glimpse into the heart of Egyptian rural life and heritage.", ["Warm temperatures", "Agricultural richness", "Cultural traditions", "Community events"], ["Moderate humidity", "Limited greenspace", "Infrastructure challenges", "Environmental concerns"]],
                "Dakahlia": ["Dakahlia is located in the heart of the Nile Delta and is renowned for its rich agricultural lands and vibrant local markets. This governorate features a diverse population and a dynamic blend of urban and rural lifestyles, making it a fascinating area to explore.", ["Moderate temperatures", "Rich agriculture", "Lively markets", "Cultural festivals"], ["High humidity", "Frequent rain days", "Traffic issues", "Limited job opportunities"]],
                "Kafr El Sheikh": ["Kafr El Sheikh is known for its fertile lands and significant agricultural output. This governorate offers a unique blend of traditional rural life and modern development, making it a vital part of Egypt's economy and an appealing place for agricultural tourism.", ["Mild temperatures", "Rich agricultural resources", "Cultural diversity", "Strong local markets"], ["High humidity", "Frequent rain days", "Limited recreational facilities", "Infrastructure issues"]],
                "Gharbia": ["Gharbia, situated in northern Egypt, is characterized by its agricultural activities and vibrant local communities. The governorate features a mix of urban and rural settings, providing a unique cultural experience and a strong sense of local identity.", ["Moderate temperatures", "Cultural heritage", "Agricultural significance", "Rich local traditions"], ["Moderate humidity", "Limited greenspace", "Economic challenges", "Traffic congestion"]],
                "Fayoum": ["Fayoum is famous for its picturesque landscapes and rich agricultural history. This governorate offers unique natural features, including Qarun Lake and various historical sites, attracting nature lovers and history enthusiasts alike.", ["Warm temperatures", "Diverse ecosystems", "Cultural heritage", "Scenic landscapes"], ["Low rainfall", "Limited urban development", "Accessibility issues", "Environmental concerns"]],
                "Beni Suef": ["Beni Suef, located in central Egypt, is known for its agricultural productivity and historical significance. This governorate blends modern infrastructure with ancient sites, providing a glimpse into both contemporary and ancient Egyptian life.", ["Hot temperatures", "Rich agricultural resources", "Cultural landmarks", "Diverse local traditions"], ["Low humidity", "Limited greenspace", "Traffic issues", "Economic challenges"]],
                "Minya": ["Minya is renowned for its rich archaeological sites and vibrant cultural traditions. This governorate is home to significant ancient monuments and offers a unique experience of Egypt's historical depth, attracting researchers and tourists alike.", ["Hot temperatures", "Cultural richness", "Historical significance", "Active local communities"], ["Low humidity", "Limited rainfall", "Infrastructure issues", "Economic challenges"]],
                "Qena": ["Qena is known for its historical significance and beautiful landscapes along the Nile. This governorate is rich in ancient monuments, including temples and tombs, providing a glimpse into Egypt's storied past and vibrant local culture.", ["Hot temperatures", "Rich history", "Cultural diversity", "Breathtaking views"], ["Low humidity", "Limited urban infrastructure", "Economic challenges", "Accessibility issues"]],
                "Sohag": ["Sohag, located in Upper Egypt, is known for its archaeological sites and rich cultural traditions. The governorate features a mix of ancient history and modern development, making it an intriguing area for both residents and visitors.", ["Warm temperatures", "Cultural heritage", "Significant historical sites", "Vibrant local culture"], ["Low humidity", "Limited rainfall", "Economic challenges", "Traffic issues"]],
                "Matruh": ["Matruh, a coastal governorate, is famous for its stunning beaches and beautiful Mediterranean scenery. This area offers a relaxing atmosphere and vibrant local culture, attracting tourists seeking both adventure and tranquility.", ["Mild temperatures", "Beautiful beaches", "Vibrant culture", "Rich history"], ["High humidity", "Frequent rain days", "Overcrowding in summer", "Infrastructure challenges"]],
                "North Sinai": ["North Sinai is characterized by its unique landscapes and rich history. This governorate holds significant cultural and strategic importance, featuring a mix of natural beauty and historical sites that attract both locals and tourists.", ["Moderate temperatures", "Rich cultural history", "Strategic location", "Natural beauty"], ["High humidity", "Limited infrastructure", "Security concerns", "Economic challenges"]],
                "South Sinai": ["South Sinai is known for its stunning landscapes and Red Sea resorts. This popular tourist destination offers breathtaking views, diverse ecosystems, and a vibrant local culture, making it a haven for adventure seekers and relaxation enthusiasts alike.", ["Warm temperatures", "Beautiful landscapes", "Tourist attractions", "Vibrant nightlife"], ["Low humidity", "Limited agricultural land", "High living costs", "Environmental concerns"]],
                "Red Sea": ["Red Sea, a coastal governorate, is famous for its beautiful resorts and vibrant marine life. This area is a hotspot for diving and water sports, combining stunning natural beauty with a lively tourism industry that draws visitors from around the globe.", ["Warm temperatures", "Beautiful beaches", "Rich marine biodiversity", "Tourist-friendly facilities"], ["Low rainfall", "Limited urban areas", "Environmental concerns", "Overcrowding during peak seasons"]],
                "New Valley": ["New Valley, located in the western desert, is known for its unique landscapes and agricultural projects. This governorate provides a different perspective on Egypt's diverse geography and is home to various developmental initiatives aimed at improving local livelihoods.", ["Hot temperatures", "Unique landscapes", "Agricultural innovation", "Rich cultural traditions"], ["Low rainfall", "Limited population density", "Infrastructure challenges", "Economic isolation"]],
                "Qalyubia": ["Qalyubia, situated just north of Cairo, is characterized by its rich agricultural lands and close proximity to the capital. The governorate features a blend of rural and urban life, offering unique cultural experiences, local markets, and community events.", ["Moderate temperatures", "Rich agriculture", "Cultural diversity", "Strong local traditions"], ["Moderate humidity", "Limited greenspace", "Traffic congestion", "Economic challenges"]],
                "Assiut": ["Assiut, located in Upper Egypt, is known for its historical significance and educational institutions. This governorate blends rich cultural heritage with modern development, making it an important area for education and culture in the region.", ["Warm temperatures", "Cultural significance", "Educational institutions", "Vibrant community life"], ["Low humidity", "Limited greenspace", "Economic challenges", "Infrastructure issues"]]
            };
            setReport([GovernorateName, ...reports[GovernorateName]]);
        }
    }
    function Filter(filter) {
        setIconsState(filter);
        if (filter == -1) {
            data.forEach(governorate => {
                $(`#${governorate[0]}`).css("fill", "rgb(145, 145, 145)");
            });
        } else {
            const SwitchIT = filter == 1 || filter == 3 || filter == 5 || filter == 6 || filter == 7;
            const max = Math.max(...data.map(g => g[1][filter]));
            const min = Math.min(...data.map(g => g[1][filter]));
            data.forEach((governorate) => {
                const value = governorate[1][filter];
                const ratio = (value - min) / (max - min);
                const r = Math.round(Math.max(0, Math.min(255, 255 - ratio * 255)));
                const g = Math.round(Math.max(0, Math.min(255, ratio * 255)));
                $("#" + governorate[0]).attr("style", `fill: rgb(${SwitchIT ? r : g},${(SwitchIT ? g : r) + (filter == 5 || filter == 6 ? 50 : 0)}, 0)`);

            });
        }
    }
    return (
        <div className=' MapPage dfsc'>
            {IconsState != -1 && < div className='testmeter h-100 justify-content-center align-items-center d-flex '>
                {console.log(Icons)}
                <div className='h-75 w-100 justify-content-center align-items-center d-flex flex-column gap-3'>
                    {Icons[IconsState][1] ?
                        <div className='w-100 d-flex justify-content-center align-items-center gap-1'>
                            <i class={`${Icons[IconsState][0]} mt-1`} style={{
                                fontSize: "10px"
                            }}></i>
                            <i class={`${Icons[IconsState][0]}`}></i>
                            <i class={`${Icons[IconsState][0]} mt-1`} style={{
                                fontSize: "10px",
                            }}></i>
                        </div>
                        :
                        <i class={`${Icons[IconsState][0]}`}></i>
                    }
                    <div className="Meter rounded"></div>
                    {Icons[IconsState][3] ?
                        <div className='w-100 d-flex justify-content-center align-items-center gap-1'>
                            <i class={`${Icons[IconsState][2]} mt-1`} style={{
                                fontSize: "10px"
                            }}></i>
                            <i class={`${Icons[IconsState][2]}`}></i>
                            <i class={`${Icons[IconsState][2]} mt-1`} style={{
                                fontSize: "10px",
                            }}></i>
                        </div>
                        :
                        <i class={`${Icons[IconsState][2]}`}></i>
                    }
                </div>
            </div>
            }
            <div className='MapArea dfcc w-75 h-100'>
                <div className='Maps'>
                    <div className="Map dfcc" alt="" >
                        <svg
                            className='map'
                            xmlns:mapsvg="http://mapsvg.com"
                            xmlns:dc="http://purl.org/dc/elements/1.1/"
                            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            xmlns="http://www.w3.org/2000/svg"
                            mapsvg:geoViewBox="24.697924 31.667680 36.894654 21.724740"
                            width="548.58221"
                            height="498.86664">
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Alexandria" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Alexandria")}
                                d="m 242.07971,17.9318 0,0.09 0.1,0.06 -0.02,0.07 -0.06,0 -0.04,-0.12 -0.08,0 -0.21,0.16 0.02,0.15 0.13,0.03 -0.1,0.17 0.11,0.06 -0.26,0.06 0.01,0.09 0.11,0.07 -0.09,0.28 0.21,0.29 -0.01,0.22 0.12,0.21 0.26,0.16 0.05,0.48 0.12,0.1 0,0 -0.02,2.23 -1.11,1.81 0,0 0,0 0,0 -1.19,3.14 -4.56,2.63 0,0 -3.2,2.64 2.3,2.03 -0.7,2.76 0,0 -1.17,2.09 2.28,3.74 5.62,6.44 -5.06,7.56 -4.91,2.33 -3.9,1.27 -1.79,0.26 -1.42,2.08 -1.43,4.22 0,0 -0.91,-30.57 0.02,-3.08 0,0 0.18,-0.12 0.1,-0.17 0.3,-0.07 0.11,-0.17 0.22,-0.09 0.8,-0.67 0.16,-0.04 0.37,-0.29 0.08,-0.25 0.06,0 0,0.06 0.11,-0.06 0.4,-0.39 0.39,-0.28 0.35,-0.42 0.67,-0.55 0.1,-0.01 0.06,-0.12 0.35,-0.12 0.54,-0.44 0.27,-0.1 0.15,-0.23 0.42,-0.28 0.05,-0.13 0.24,-0.07 0.03,-0.13 0.19,-0.1 0.57,-0.68 0.15,-0.36 -0.02,-0.26 0.17,-0.06 0.15,-0.16 0.21,-0.01 -0.11,0.16 -0.21,0.06 0.01,0.12 0.12,0 0.04,0.1 0.11,-0.06 0.1,-0.22 0.15,0.06 -0.02,0.15 -0.15,0.17 -0.05,0.26 0.09,-0.04 0.05,-0.19 0.19,-0.23 0.07,0.1 -0.04,0.31 0.25,0.03 0.06,-0.19 0.09,-0.04 0,0.36 0.26,-0.16 0.17,0.03 0.13,-0.15 0.14,-0.03 0.21,-0.17 0.14,-0.29 0.09,0.06 0.11,-0.06 0.21,-0.33 0.31,-0.17 0.17,-0.25 0.08,-0.45 0.11,0 0,0.13 0.07,-0.01 0.3,-0.28 -0.01,-0.09 0.06,-0.01 0.07,0.09 0.26,-0.39 -0.06,-0.15 -0.12,0.03 0.01,0.09 -0.07,0.03 -0.13,-0.17 0.21,-0.33 0.25,-0.17 -0.04,-0.06 -0.04,0.09 -0.05,-0.01 -0.09,-0.17 -0.15,0 -0.12,0.23 -0.09,0.04 -0.01,0.12 -0.2,-0.01 -0.05,0.22 -0.12,-0.1 0.06,0.2 -0.22,-0.15 0.47,-0.49 0.02,-0.12 -0.06,-0.06 0.26,-0.06 0.05,-0.12 0.39,-0.07 0,-0.17 -0.1,-0.15 0.11,-0.07 0.22,0.01 0.13,-0.12 0.05,0.07 -0.14,0.09 -0.02,0.19 0.17,0.26 0.2,0.12 0.37,-0.05 0.31,-0.39 -0.21,-0.26 0.16,0.01 0.24,0.22 0.35,-0.19 0.25,-0.26 0.41,-0.25 0.15,-0.22 0.22,-0.1 0.19,-0.28 0.15,0 0.05,-0.16 0.14,0.03 -0.02,-0.15 0.07,-0.09 0.24,0.01 0.11,-0.15 0.09,-0.01 0.05,-0.16 0.13,-0.03 0.05,-0.17 0.15,-0.17 0.21,-0.1 0.15,-0.23 0.26,-0.16 0.01,-0.13 -0.06,-0.09 0.06,-0.15 0.5,-0.03 0.19,-0.19 0.03,-0.2 0.26,-0.03 0.1,-0.22 -0.13,-0.16 0.06,-0.09 0.13,0.01 -0.01,-0.13 0.17,-0.03 0.21,0.17 0.04,-0.13 -0.12,0.03 -0.02,-0.06 0.1,-0.25 0.07,0.16 0.14,0.1 0.2,-0.01 0.32,-0.17 0.24,-0.31 0.01,-0.1 0.3,-0.32 -0.01,-0.13 -0.22,-0.16 0.19,-0.12 -0.03,-0.09 0.49,-0.13 0.27,-0.36 0.22,-0.09 0.02,-0.07 0.1,0.03 0.4,-0.1 z"
                                title="Alexandria"
                                id="Alexandria"
                                onClick={() => setActivatedGov(old => old === "Alexandria" ? "" : "Alexandria")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Aswan" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Aswan")}
                                d="m 373.73971,374.6618 -1.02,3.55 -0.01,6.03 0.79,1.85 0.32,2.99 0.92,1.14 1.17,2.13 0.2,1.85 0.33,1.42 0.98,1.77 1.63,0.93 1.44,1.63 0.2,4.53 1.07,0.41 -0.16,1.84 -0.72,0.73 -0.59,0.99 -0.39,2.2 0.07,2.34 0.98,3.4 1.57,0.36 0.83,1.91 0.77,1.45 -0.23,1.37 -0.79,1.13 -0.65,2.2 -1.05,2.05 -1.56,1.62 -1.11,1.35 -1.25,2.04 -1.3,1.42 -0.07,1.2 0.98,0.85 2.48,2.47 3.03,0.24 1.02,0.98 3.32,2.35 0,0 2.23,3.52 0.21,3.31 0,0 -1.19,2.02 -2.71,-0.4 -2.76,-2.94 -1.45,-1.91 -2.88,0.43 0,0 -2.57,-0.78 -1.83,-1.17 -2.62,-1.84 -3.16,0.33 0,0 -2.99,1.64 0.26,5.53 -1.18,3.42 -2.31,2.58 -2.73,1.59 -3.72,2.45 -3.14,2.75 -2.62,0.78 0,0 -2.94,0.88 -3.43,-1.52 0,0 -2.35,-2.28 -1.47,-1.9 -2.11,-1.33 -2.75,0.66 -1.18,4.45 -0.39,2.35 -1.18,2.88 -1.04,1.96 -1.39,1.74 -2.71,1.16 -4.28,-0.67 -1.44,3.14 -1.96,1.96 -2.75,1.44 -8.11,2.75 0,0 -1.19,4.65 -5.17,-0.01 -0.06,-0.24 0.09,-0.7 0.6,-1.7 0.42,-0.88 1.35,-2.13 0.41,-0.47 0.65,-0.52 0.28,-0.47 0.53,-0.63 0.26,-0.58 -0.02,-0.28 -0.17,-0.26 -0.52,-0.27 -0.6,-1.05 -0.41,-0.28 -0.26,0.11 -0.89,0.76 -3.81,2.33 -1.44,-0.13 0,0 -2.67,0.26 -1.51,-2.22 0.78,-2.75 4.32,-2.23 3.01,-0.91 4,0.12 2.96,-2.73 1.92,-2.16 0.83,-1.57 0.48,-1.58 -0.23,-1.6 0,-4.33 -0.21,-2.22 0.84,-1.83 1.47,-1.74 1.17,-0.5 2.77,-0.02 2.05,0.23 1.61,-0.23 2.26,-0.74 8.64,-2.42 5.49,-1.62 0.98,0.38 2.59,0.26 2.57,0.51 1.94,1.22 1.5,0.66 1.64,-0.92 1.7,-3.32 0.95,-2.01 1.23,-2.18 0.79,-2.37 1.25,-2.8 1.69,-2.7 1.32,-2.27 1.54,-3.24 1.69,-2.53 1.42,-2.36 0.3,-0.96 -0.48,-1.98 -2.07,0.11 -1.72,0.39 -2.68,-0.36 -5.18,-1.23 -1.39,-1.65 0.36,-3.28 1.71,-5.93 1.41,-2.01 1.56,-1.02 2.29,-1.36 2.19,-0.91 2.01,-0.56 2.12,-1.72 -0.32,-1.26 -1.49,-1.21 -2.11,-2.04 -0.17,-3.14 1.39,-1.39 1.28,-0.49 1.84,-0.92 3.74,-3.91 0.39,-6.45 0,-2.96 0.59,-4.2 0.02,-3.42 0.75,-3.48 0.66,-3.49 0,-2.88 0.56,-3.32 -1.8,-3.48 -0.56,-2.19 -1.17,-3.56 -0.06,-2.17 0.03,-2.6 -0.39,-1.85 -1.6,-2.01 -2.68,-2.52 -3.49,-1.62 0,0 0.96,-3.51 -0.07,-3.57 0,0 1.91,1.73 0,0 2.39,1.48 1.83,1.77 4.35,3.02 3.29,5.5 0.47,3.34 0.14,9.58 1.92,4.53 3.06,5.11 0.23,1.55 -0.39,4.01 -3.2,2.66 -1.99,2.97 -0.13,2.37 0,0 z"
                                title="Aswan"
                                id="Aswan"
                                onClick={() => setActivatedGov(old => old === "Aswan" ? "" : "Aswan")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Assiut" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Assiut")}
                                d="m 311.44971,248.2418 -2.22,-0.02 -0.85,-1.85 -1.04,-0.98 -0.89,-1.98 -0.86,-1.15 -1.78,-0.19 -0.57,1.09 -1.15,1.66 -0.86,0.64 -1.72,0.96 -1.19,0.98 -0.65,0.2 0,0 -2.24,-3.71 -1.84,-4.29 -1.8,-3.71 -1.71,-2.81 -2.69,-1.55 -1.65,-0.39 -2.16,-0.24 -0.99,-0.53 -2.11,-1.88 -3.94,-3.85 -1.39,-0.78 -1.13,-1.65 -0.52,-2.14 -1.39,-1.85 -0.95,-2.04 -0.45,-2.55 -1.03,-0.47 -0.17,-1.94 -0.78,-0.78 0.09,-2.24 1.04,-0.1 0,0 3.03,0 1.83,0.49 2.43,0.39 1.56,-1.37 2.78,0.19 0,0 -0.67,3.4 0.58,4.71 0.61,1.55 1.47,1.76 0.94,0.46 3.4,1.19 1.39,1.07 3.89,1.52 1.15,0.1 2.1,1.05 1.34,0.75 1.37,4.42 2.84,2.18 0,0 2.56,2.18 1.28,0.9 0,0 1.4,3.08 2.3,3.78 1.49,3.84 z"
                                title="Assiut"
                                id="Assiut"
                                onClick={() => setActivatedGov(old => old === "Assiut" ? "" : "Assiut")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Red Sea" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Red Sea")}
                                d="m 499.55971,395.4018 0.08,0.65 0.11,0.33 -0.09,0.19 -0.19,0.03 -0.17,-0.07 -0.01,-0.11 0.04,-0.05 0.06,0.03 0.01,-0.1 0.2,-0.16 -0.04,-0.58 -0.06,-0.11 0.06,-0.05 z m -82.61,-144.54 0.16,0.14 0.04,0.17 0.2,0.07 0.04,0.15 0.5,-0.04 0.09,0.08 0.03,0.21 -0.14,0.83 0.09,0.24 0.17,0.15 0.12,0.33 0,0.15 -0.1,0.13 0.05,0.56 -0.07,0.07 0.05,0.07 -0.05,0.08 -0.09,-0.03 -0.35,-0.51 -0.13,-0.38 -0.13,-0.1 -0.07,0.01 -0.25,-0.38 0.09,-0.28 -0.05,-0.25 -0.24,-0.11 -0.14,-0.28 -0.12,-0.01 0,-0.18 -0.23,-0.24 0.01,-0.22 0.09,-0.11 0.19,-0.07 0.15,-0.26 0.09,0 z m -2.85,-24.54 0.17,0.15 0.04,-0.11 0.2,0.07 0.29,0.35 0.13,0.28 0.11,0.07 0.06,0.39 -0.08,0.2 0.01,0.2 0.14,0.18 0.06,0.27 0.22,0.1 0.08,0.53 0.11,0.07 0.05,0.27 -0.06,0.11 -0.26,-0.07 -0.04,0.06 -0.23,0.03 -0.05,-0.1 -0.26,-0.14 -0.26,-0.6 -0.45,-0.38 -0.26,-0.03 0.05,-0.15 -0.08,-0.04 -0.02,-0.14 -0.22,-0.17 -0.13,-0.22 0.06,-0.17 0.35,0.15 0.2,-0.1 -0.01,-0.18 -0.19,-0.46 0.05,-0.18 0.09,-0.06 0.05,-0.15 0.08,-0.03 z m 1.01,-13.62 0.08,0.1 0.5,0.03 0.2,-0.06 0.64,0.07 0.11,0.24 0.3,0.11 0.4,0.49 0.54,0.25 0.16,0.01 0.4,0.28 0.05,0.15 0.46,0.01 0.13,0.06 0.25,0.38 0.01,0.2 0.25,0.53 0.04,0.34 0.19,0.2 0.21,0.78 -0.15,0.32 -0.31,0.07 -0.32,-0.01 0,-0.11 0.15,-0.03 0,-0.1 -0.42,-0.46 -0.15,-0.36 -0.25,-0.17 -0.36,0.03 -0.04,-0.25 -0.33,-0.36 -0.15,-0.08 -0.07,-0.14 -0.23,-0.1 -0.15,-0.21 -0.41,0.04 -0.16,-0.1 -0.24,0.01 -0.02,-0.1 -0.3,-0.29 -0.17,0.01 -0.22,-0.17 -0.22,0.11 -0.25,0.03 -0.15,-0.06 -0.57,-0.66 -0.09,-0.35 0.01,-0.08 0.14,0 0.11,0.13 0.09,-0.06 0.1,-0.48 0.21,-0.19 z m -6.52,-1.08 0.11,0.06 0.04,0.11 -0.11,0.18 0.04,0.35 -0.15,-0.07 0,-0.11 -0.13,-0.06 -0.1,-0.22 0.11,-0.2 0.19,-0.04 z m -1.58,-0.43 0.21,0.08 0.02,0.14 0.13,0.03 0.05,0.13 0.27,0.24 0.11,0.27 -0.07,0.03 -0.39,-0.31 -0.37,-0.53 0.04,-0.08 z m 0.71,-3 0.21,0.2 0.05,0.17 0.26,0.14 -0.09,0.66 -0.14,0.22 0.14,0.04 0,0.14 0.1,0.17 0.17,0.03 0.55,0.36 0.27,0.03 0.11,0.24 -0.14,0.34 -0.41,0.25 -0.08,0.17 -0.35,0.04 -0.21,0.11 0.04,0.5 0.21,0.28 -0.06,0.13 -0.12,-0.11 -0.26,-0.5 -0.01,0.24 -0.35,-0.53 0.07,-0.24 0.51,-0.01 0.04,-0.21 -0.13,-0.01 -0.24,-0.18 -0.22,0.01 -0.26,-0.08 0,-0.07 -0.13,-0.06 -0.08,-0.13 -0.46,-0.07 -0.13,-0.06 -0.05,-0.1 0.28,-0.49 0.09,-0.31 0.15,-0.14 0,-0.2 0.3,-0.84 0.05,-0.08 0.32,-0.05 z m 0.68,-0.29 0.06,0.03 0.08,0.35 0.14,0.11 0.01,0.21 -0.16,-0.07 -0.15,-0.27 -0.06,-0.31 0.08,-0.05 z m 0.77,-1.63 0.14,0.13 0.16,0.34 0.39,0.17 0.16,0.67 -0.03,0.36 -0.27,0.38 -0.08,0.31 -0.15,-0.03 -0.46,-0.41 -0.03,-0.15 -0.15,-0.13 -0.17,-0.62 -0.11,-0.07 -0.08,-0.2 -0.01,-0.13 0.14,-0.04 -0.06,-0.22 0.09,-0.15 0.23,-0.04 0.09,-0.11 0.2,-0.06 z m 0.39,-0.9 0.05,0.14 -0.06,0.06 -0.13,-0.04 -0.15,0.1 -0.19,0.31 -0.05,0.22 -0.21,-0.04 -0.24,0.07 -0.05,0.07 0,-0.08 -0.09,-0.06 0.06,-0.18 0.09,0.06 0.09,-0.15 0.19,-0.04 0.02,-0.31 0.29,0.03 0.14,-0.07 0.08,0.04 0.16,-0.13 z m -8.93,-4.36 0.03,0.07 -0.11,0.07 -0.03,-0.08 0.11,-0.06 z m -0.53,-0.86 0.26,0.1 0.17,0.17 0.01,0.1 -0.09,0.11 0.15,0.13 0.06,0.22 -0.15,-0.13 -0.1,0.24 0.08,0.03 0.05,0.13 0.04,0.48 -0.37,-0.13 -0.08,-0.28 -0.61,-0.48 0.24,-0.29 0.06,-0.24 0.16,-0.03 0.04,-0.13 0.08,0 z m -93.42,-64.48 4.44,0.63 4.47,1.76 6.48,1.58 1.24,0 0,0 1.09,2.1 5.16,-0.98 6.63,-0.1 8.03,-4.94 4.28,-1.17 3.94,-2.34 5.38,-0.19 0,0 0.13,-0.01 0.09,0.24 -0.05,0.16 0.19,0.13 0.14,0.24 -0.04,0.36 0.09,0.2 -0.03,0.27 -0.24,0.58 0.03,0.07 -0.18,0.11 -0.15,0.26 -0.07,-0.04 -0.56,0.47 0,0.1 0.11,0.06 -0.01,0.11 -0.08,-0.1 -0.4,0.07 -0.35,0.43 -0.07,0.2 0,0.06 0.01,0.07 0.33,0.41 0.05,0.57 -0.28,0.37 -0.11,0.47 -0.1,1.14 0.05,0.36 0.51,0.82 0.29,0.28 0.42,0.57 0.37,0.31 0.28,0.34 0.17,0.55 0.24,0.35 0.13,0.68 0.17,0.48 0.13,0.07 -0.08,0.52 0.41,0.45 0.08,0.28 -0.06,0.1 0.51,0.38 0.25,0.38 0.14,0.01 0.06,0.1 0.27,0.1 0.36,0.28 0.36,0.75 0.14,0.57 0.34,0.42 0.2,0.08 0.05,0.16 0.13,0.03 0.2,0.21 0.77,0.07 0.54,0.18 0.22,0.14 0.46,0.4 0.25,0.54 0.12,0.13 0.33,0.78 0.08,0.44 0.17,0.42 0.1,0.21 0.14,0.04 0.19,0.23 -0.15,0.5 0.02,0.54 0.26,0.53 0.2,0.08 -0.03,0.27 0.29,0.71 -0.1,0.06 0.01,0.67 0.14,0.16 0.01,0.24 0.35,0.18 0,0.37 0.13,0.11 0.05,0.17 0.01,0.3 0.24,0.75 0.04,0.66 0.16,0.88 -0.01,0.37 -0.16,0.27 0.16,0.27 0.06,0.08 0.61,0.24 0.12,0.17 0.29,0 0.42,0.21 0.39,-0.03 0.14,0.1 0.5,0.1 0.17,0.14 0.1,0 0.03,0.11 0.13,0.1 -0.04,0.14 0.3,0.13 0.1,0.27 0.14,0.14 0,0.13 0.11,0.08 0.07,0.28 0.2,0.23 0.29,0.2 0.29,-0.01 0.03,-0.08 0.05,0.01 0,0.08 -0.13,0.1 -0.04,0.3 0.09,0.17 0.14,0.08 0.02,0.15 0.19,0.3 0.09,0.01 0.03,0.01 0.04,0.06 0.17,-0.03 0.06,0.11 0.42,-0.03 0.26,0.08 0.06,0.13 -0.06,0.07 0.03,0.32 0.14,0.2 0.97,0.66 0.25,0.83 0.49,0.75 0.14,0.45 0,0.23 0.29,0.61 0.09,0.07 -0.01,0.2 0.18,0.1 0.17,0.25 0.01,0.14 0.14,0 0.05,0.11 0.15,-0.04 0.1,0.45 0.44,0.64 0.27,0.18 0.31,0.01 0.36,0.2 0.35,0.1 0.14,0.18 0.09,0.21 -0.05,0.3 0.08,0.75 -0.01,0.2 0.02,0.52 0.28,0.2 0.26,0.32 0.04,0.49 -0.05,0.21 0.31,0.14 0.21,0.28 0.26,0.16 0.38,0.06 -0.01,0.24 0.34,0.24 0.04,0.44 0.13,0.25 0.05,0.45 0.14,0.07 0.21,0.39 0.21,0.1 0.3,0.28 0.16,0.61 0.36,0.1 0.1,0.14 0.29,0.14 0.26,0.23 0.41,0.69 0.45,0.3 0.36,0.56 0.29,0.24 0.1,0.24 -0.09,0.25 0.15,1 0.19,-0.02 0.27,0.16 0.34,0 0.15,-0.11 0.11,0 0.19,0.14 0.39,0.07 0.05,0.21 -0.06,0.25 0.52,0.48 0.2,0.35 0.11,0.16 0.31,0.31 0.1,0 0.21,0.17 0.06,0.2 0.31,0.03 0.03,0.1 0.24,0.08 0.35,0.37 0.01,0.1 -0.1,0.11 0.02,0.69 0.33,0.75 0.37,-0.01 0.11,0.18 0.1,-0.04 0.13,0.1 0.4,-0.03 0.11,0.46 0.1,-0.01 0.14,0.08 -0.06,0.16 0.24,0.22 0.32,0 0.99,-0.2 0.44,0.1 0.08,0.21 0.06,0.14 0.2,0.23 0.36,0 0.17,0.11 0.3,0.52 0.06,-0.01 0.51,0.46 0.44,0.08 0.46,0.25 0.13,0.14 0.22,0.07 0.37,0.49 0.15,0.39 0.12,0.1 0.29,0.56 0.56,0.7 0.15,0.07 0.16,0.53 0.13,0.04 0.2,0.35 0.14,0.1 0.02,0.27 0.24,0.45 0.07,0.18 0,0.15 0.08,0.01 0.14,0.2 0.08,0 0.01,-0.15 0.08,0.01 0.07,0.08 -0.06,0.17 0.2,0 0.11,0.1 0.11,0.28 -0.03,0.36 0.06,0.46 0.14,0.27 0.11,0.06 0.24,0.31 0.11,0.34 0.52,0.25 0.02,0.16 -0.06,0 -0.04,0.1 0.08,0.34 -0.16,0 -0.05,0.25 0.19,0.45 -0.16,0.49 0.09,0.13 0,0.35 0.25,0.35 -0.03,0.18 -0.04,0.03 -0.17,0.07 -0.2,-0.15 -0.16,0.15 -0.02,0.11 -0.11,0.01 -0.04,-0.41 -0.06,-0.13 -0.16,-0.11 0.04,-0.34 -0.05,-0.13 -0.17,-0.1 -0.17,-0.22 -0.19,0.01 -0.11,0.25 -0.46,-0.06 -0.47,-0.44 -0.09,-0.01 -0.14,-0.25 -0.45,-0.03 -0.17,-0.27 -0.65,-0.01 -0.25,-0.21 -0.29,-0.1 -0.2,0.17 -0.09,0 -0.2,0.6 -0.11,0.1 -0.11,0.39 0.01,0.25 0.42,0.42 0.45,0.04 0,0.13 0.14,0.22 0.17,0.08 0.05,0.17 0.17,0.2 0.05,0.66 0.26,0.17 0.14,-0.01 0.36,0.86 0.45,0.01 0.26,-0.15 0.1,0.01 0.74,-0.55 0.19,0.34 0.06,-0.01 0.01,0.11 -0.15,0.24 -0.01,0.22 -0.13,0.1 -0.03,0.21 -0.17,0.29 -0.01,0.13 0.08,0.11 -0.29,0.29 -0.1,0.39 -0.17,0.18 0,0.28 0.09,0.01 0.11,0.18 0.16,-0.07 0.09,0.03 0.01,0.07 -0.09,0.04 0.04,0.37 -0.09,0.13 0.2,0.34 1.2,0.13 0.06,0.15 0,0.52 0.15,0.03 0.06,0.2 0.16,0 -0.1,0.27 0.45,0.29 0.06,-0.01 0.02,0.11 -0.06,0.39 -0.1,0.1 -0.04,-0.06 -0.17,0.03 -0.11,-0.37 -0.24,-0.29 0.03,-0.29 -0.49,-0.53 -0.19,-0.08 -0.23,-0.24 -0.07,0 -0.08,0.14 -0.15,0.06 0.06,0.18 0.35,0.43 0.04,0.14 -0.09,0 -0.25,-0.32 -0.22,-0.06 -0.09,-0.17 -0.19,-0.04 -0.02,-0.25 -0.21,-0.18 0.02,-0.11 -0.37,-0.13 -0.85,0.63 -0.3,0.41 -0.19,0.13 -0.15,0.28 -0.03,0.25 -0.05,0.01 -0.04,-0.08 -0.15,0.07 0.05,0.36 0.34,0.04 0.15,0.11 0.13,0 0.05,0.11 0.22,-0.03 0.14,0.31 0.25,0.08 0.09,0.25 0.47,0.41 0.51,0.76 0.28,0.77 0.24,0.1 0.03,0.92 0.14,0.18 -0.03,0.48 -0.21,0.57 0.04,0.56 0.11,0.35 0.21,0.08 0.45,-0.08 0.67,0.22 0.07,-0.03 0.06,0.08 -0.02,0.2 0.31,0.31 0.24,0.49 0.09,0.06 0.49,-0.03 0.22,0.17 0.01,0.22 0.17,0.15 0.08,0.42 0.06,0.07 0.03,0.62 0.09,0.1 0.01,0.13 0.11,0.06 0.14,0.39 0.15,0.17 0.13,0 0.2,0.18 0.27,0.13 0.15,0.15 0.13,0.43 0.09,0.03 0.01,-0.11 0.11,-0.03 0.06,0.27 0.54,0.5 0.02,0.46 0.17,0.21 0.06,0.21 0.15,0.01 -0.04,0.15 0.14,0.39 -0.06,0.06 -0.01,0.28 -0.13,0.31 -0.11,-0.01 -0.05,0.17 -0.06,0.02 0.08,-0.38 0,-0.07 -0.06,-0.01 -0.03,0.18 -0.17,0.06 -0.02,0.25 0.1,0.11 0.1,0 0.2,-0.14 0.08,0.91 0.24,0.03 0.05,0.11 0.16,0.07 -0.05,0.43 -0.09,0.1 0.15,0.38 0.42,0.17 0.1,0.1 0.3,0.66 0.04,0.04 0.17,-0.04 0.15,0.08 0.04,0.27 1.35,0.31 0.07,0.14 0.03,0.31 0.15,0.06 0.13,-0.06 0.4,0.43 0.14,0 0.04,0.17 0.34,0.11 0.04,0.2 0.19,0.11 0.14,-0.01 0.07,0.08 0.44,0.07 0.09,0.14 0.16,0.03 0.06,0.22 0.46,0.01 0.16,-0.07 0.1,0.18 0.26,-0.04 0.15,0.06 0.4,0.61 0.19,0.04 0.16,0.15 -0.03,0.48 -0.05,0.1 -0.29,0.2 -0.06,0.18 0.11,0.22 0,0.33 0.29,0.33 0.13,0.33 -0.13,0.15 -0.14,-0.06 0,0.14 -0.13,-0.04 -0.15,0.07 -0.26,0.27 0.05,0.15 -0.07,0.1 -0.15,0.03 -0.16,0.2 0.1,0.14 -0.09,0.1 0.05,0.14 -0.1,0.29 0.11,0.1 0.14,0.07 0.04,0.47 -0.05,0.46 -0.03,0.17 0.06,0.96 -0.13,0.04 -0.06,0.11 0.04,0.45 0.09,0 0.1,0.11 -0.01,0.28 0.05,0.08 0.13,0.06 0.2,-0.03 0.14,0.03 -0.01,0.13 0.21,0.03 0.05,0.14 0.19,0.1 0.04,0.25 0.31,0.15 0.06,0 0.01,-0.07 0.24,0.01 0.05,0.11 0.12,0.08 0.11,0.06 0.16,-0.04 0.19,0.06 0.54,0.6 0.04,0.18 0.15,0.08 0.09,0.33 0.14,0.14 0.02,0.18 -0.09,0.14 0.07,0.13 -0.4,-0.18 -0.12,0 -0.31,0.28 -0.05,0.18 0.01,0.32 0.19,0.31 0.33,0.36 0.07,0.17 0.28,0.26 0.27,0.11 0.01,0.15 0.08,0.04 -0.08,0.26 -0.45,0.17 -0.07,0.13 0.31,0.26 0.29,0.08 0.09,-0.03 0.1,0.21 0.19,0.06 0.22,0.66 -0.22,0.08 0.04,0.03 0.22,0.03 0.55,1.67 0.23,0.06 0.39,0.58 0.26,0.14 0.33,0.82 -0.1,0.13 0.17,0.11 0.14,0.26 0.18,-0.1 -0.01,-0.14 0.11,-0.01 0.06,-0.15 0.26,-0.13 0.31,-0.08 0.29,0.07 -0.36,0.89 0.01,0.29 0.39,0.81 0.31,0.19 -0.01,0.33 -0.09,0.22 -0.19,0.13 -0.09,-0.06 -0.17,0.06 -0.17,-0.11 -0.1,0.03 -0.2,-0.29 -0.02,-0.17 -0.25,-0.08 -0.15,-0.28 -0.26,-0.04 -0.22,0.2 -0.35,0.83 -0.05,0.32 -0.29,0.14 -0.15,0.26 -0.02,0.17 0.09,0.4 0.05,0.1 0.13,0.04 0.06,0.28 -0.21,0.54 -0.34,0.22 -0.08,0.15 0.15,0.15 -0.04,0.38 0.22,0.64 0.2,0.1 0.13,0.21 0,0.07 -0.14,0.08 0.05,0.26 0.32,0.04 -0.3,0.32 -0.11,-0.03 -0.1,0.1 0.04,0.14 -0.04,0.15 -0.1,0.08 0,0.13 0.14,0.07 -0.07,0.15 -0.09,-0.13 -0.06,0.04 0.04,0.15 -0.16,0.28 0.07,0.49 -0.05,0.45 0.04,0.11 0.1,0.04 -0.04,0.24 -0.19,0.32 -0.01,0.29 -0.13,0.18 0.15,0.25 -0.03,0.28 0.17,0.21 0.15,0.07 0.06,0.31 0.06,0.13 0.07,0.1 0.49,0.15 0.22,0.17 0.39,0.08 -0.09,-0.19 0.05,-0.03 0.1,0.19 0.36,0.32 0.02,0.14 0.4,0.06 0.27,0.14 0,0.18 -0.01,0.13 0.2,0.15 0,0.14 0.15,0.1 0.4,0.08 0.04,0.14 0.1,0 0.13,0.17 0.09,0 -0.01,0.69 0.36,0.49 0.12,0.28 0.09,0.33 -0.11,0.15 0.22,0.01 0.09,0.11 -0.09,0.33 0.15,0.28 -0.11,0.06 0,0.07 0.19,-0.03 0.08,0.14 0.04,0.08 0.19,0.25 0.24,0.18 0.11,0.54 0.27,0.17 0.15,0.18 0.14,0.36 0.11,-0.01 0.02,0.13 0.07,0.07 -0.04,0.17 -0.2,0.07 0,0.07 0.2,0 0.07,0.07 -0.01,0.4 0.31,0.63 0.1,0.36 0.01,0.71 0.1,0.26 0.04,0.11 0.17,0.25 0.07,0.22 0.31,0.24 0.2,0.67 0.16,0.13 -0.08,0.15 0.16,0.3 0.09,0.49 0.74,0.46 0.02,0.11 0.11,0.04 0.01,0.08 -0.08,0.01 0.04,0.22 0.26,0.21 -0.01,0.24 0.06,0.15 0.55,0.6 0.06,0.29 0.26,0.17 0.03,0.28 0.22,0.29 0.34,0.11 0.26,0.41 0.14,0.07 0.16,0.4 0.16,0.14 0.05,0.37 0.17,0.37 -0.14,0.58 0.07,0.64 0.31,0.62 0.39,0.33 0.09,0.17 -0.02,0.08 0.09,0.14 -0.19,0.15 -0.03,0.11 0.27,0.17 0.01,0.11 0.09,0.01 0.11,0.25 0.2,1.41 0.77,1.29 0.21,0.18 0.15,0.65 0.06,0.07 0,0.23 0.42,0.29 0.17,0.29 0.29,0.15 0.13,0.24 0.09,0.61 0.19,0.28 0.36,0.3 0.2,0.04 0.11,0.11 0,0.13 0.09,0.1 -0.09,0.26 0.04,0.24 -0.08,-0.07 -0.1,0.01 -0.06,0.21 0.15,0.19 0.24,0.01 0.38,0.28 0.21,0.28 0.21,0.72 0.14,0.03 0.08,0.14 0.12,0.57 0.01,0.39 0.41,1.08 0.24,0.62 0.42,0.69 0.08,0.47 0.14,0.25 0.3,0.39 0.81,0.37 0.08,0.12 0.24,0.11 0.31,0.81 -0.26,0.12 0.19,0.1 0.05,0.18 0.36,-0.17 0.15,0.03 0.05,0.07 -0.05,0.1 0.09,0.07 -0.05,0.25 0.09,0.12 -0.03,0.08 0.2,-0.01 0.29,0.65 0.02,0.22 0.21,0.36 -0.06,0.43 0.09,0.63 0.15,0.1 0.08,0.21 0.2,0.21 -0.02,0.18 -0.24,-0.07 -0.11,0.1 0.03,0.13 0.19,-0.03 0.01,-0.05 0.09,0.03 0.27,0.87 0.11,0.14 0.16,0 0.1,0.22 -0.14,0.19 0.26,0 0.26,0.17 0.63,-0.03 0.49,0.34 0.25,0.51 0.03,0.23 0.27,0.58 0.16,0.21 0,0.25 0.15,0.23 -0.1,0.11 0.01,0.11 0.19,-0.15 0.11,0 0.44,0.55 0.35,0.06 0.11,0.14 0.17,0.08 0.33,0.55 0.36,0.32 0.19,0.03 0.15,0.14 0.06,0.12 -0.09,0.06 -0.01,0.14 0.25,0.23 -0.03,0.18 0.1,0.36 -0.24,0.26 -0.02,0.15 0.2,-0.1 0.14,0.04 0.29,0.77 0.47,0.14 0.05,0.21 -0.05,0.43 0.09,0.07 -0.19,0.28 -0.04,0.18 0.05,0.1 0.17,-0.01 0.01,0.32 0.19,0.15 0.46,0.17 0.06,0.08 -0.02,0.11 -0.11,0.08 0,0.18 0.04,0.21 0.15,0.25 0.07,0.54 0.16,0.15 -0.05,0.21 0.16,0.25 0.09,0 0.08,0.1 0.17,0.44 1.06,0.83 0.17,0.33 0.42,0.5 0.05,0.65 0.16,0.34 -0.01,0.45 -0.08,0.18 0.1,0.08 0.05,0.37 -0.09,0.15 0.01,0.05 0.1,0.1 0.13,0.43 0.27,0.3 -0.13,0.23 0.11,0.19 0.36,0.1 0.2,0.14 0.34,0.55 0.21,0.21 -0.04,0.34 0.14,0.3 -0.05,0.47 0.21,0.28 0.14,0.34 0.13,-0.03 0.1,0.07 0.06,0.29 -0.05,0.15 0.04,0.3 0.05,0.07 0.1,0 0.02,0.1 -0.02,0.07 -0.08,0 0.04,0.73 0.36,0.84 0.11,0.01 0.66,0.84 0.38,0.29 0.24,0.33 0.41,1.15 -0.06,0.01 -0.01,0.19 -0.13,0.21 0.21,0.03 0.09,0.4 0.12,0.03 -0.14,0.58 0.2,0.55 0.22,0.36 0.15,-0.01 0.11,0.07 0.79,0.93 0.66,1.04 0.04,0.32 0.21,0.21 -0.06,0.17 0.01,0.33 0.27,0.44 0.14,0.51 0.15,0.1 0.17,0.29 -0.01,0.11 -0.24,0.22 0.22,-0.11 0.15,0 0.17,0.23 0.11,0.33 0.3,0.21 0.21,0.29 0.15,0.05 0.36,0.34 0.02,0.16 0.2,0.22 0.25,0.59 -0.04,0.14 0.05,0.21 0.35,0.44 0.13,0.33 0.11,0.1 0.25,0.47 -0.01,0.42 0.34,0.67 -0.04,0.42 0.1,0.05 0.06,0.21 0.34,0.44 0.26,0.07 0.05,0.18 0.14,0.12 -0.05,0.11 0.14,0.19 0.01,0.29 0.51,0.86 0.06,0.59 0.4,0.34 0.1,0.36 0.2,0.27 0.57,0.45 0.01,0.42 0.12,0.42 -0.35,0.53 -0.17,0.47 0.02,0.23 0.15,0.11 -0.08,0.07 0,0.14 0.14,-0.04 0.06,0.29 0.09,0.01 0.04,0.12 0.06,0.01 0.08,0.16 0.22,0.15 0.32,0.3 0.1,0.21 0.14,-0.05 0.06,0.07 0.08,0.4 0.16,0.34 0.19,0.18 0.1,0.25 0.38,0.33 0.04,0.38 -0.11,0.22 0.11,0.44 -0.02,0.51 0.35,0.25 -0.08,0.97 0.1,0.71 0.21,0.14 0.1,0.27 0.17,0.12 0.01,0.08 0.41,0.45 0.5,0.3 0.11,0.16 0.36,0.27 0.27,0.4 0.1,0.41 0.19,0 0.11,0.1 0.46,0.6 0.06,0.18 0.06,0.05 0.22,0 0.17,0.42 0.2,0.23 0.02,0.31 0.42,1.03 -0.03,0.51 -0.1,0.3 -0.14,0.19 0.04,0.11 -0.13,0.44 0.09,0.05 -0.01,0.07 0.29,0.52 0.37,0.12 0.4,-0.03 0.11,0.11 -0.03,0.16 -0.22,0.12 -0.19,0.6 -0.01,0.26 0.05,0.31 0.3,0.11 0.04,0.15 0.51,0.52 0,0.12 -0.32,0.29 0.01,0.1 0.26,0.07 -0.08,-0.14 0.05,-0.1 0.59,0.02 0.2,0.23 0.11,0.71 0.32,0.64 0.16,0.07 0.17,0.22 0.13,0 0.14,0.14 0.24,0.08 0.15,0.16 0.02,0.3 -0.26,-0.05 -0.1,0.15 -0.33,0.08 -0.21,0.19 0.14,0.72 -0.19,0.3 -0.17,0.08 -0.21,0.22 -0.08,0.3 0.04,0.22 0.21,0.33 0.51,0.33 0.15,0.23 0.15,0.05 0.16,0.31 0.29,0.29 0.07,0.05 0.57,0.04 0.46,0.35 0.09,0.15 0,0.26 0.07,0.15 0.1,0.14 0.21,0.04 0.07,0.08 0,0.15 0.06,0.01 -0.17,0.27 -0.07,-0.01 0,0.07 0.29,0.22 0.06,0.27 0.21,0.18 0.24,0.46 0.11,0.46 0.46,0.65 0.59,0.44 0.64,0.14 0.05,0.41 0.17,0.27 0.41,0.22 0.13,0.14 0.5,0.16 0.09,0.16 0.3,0.18 0.25,-0.03 0.19,0.05 0.02,-0.08 -0.09,-0.01 0.02,-0.11 0.61,0.07 0.01,0.42 -0.05,0.01 0.19,0.26 0.11,0.49 0.16,0.04 0.06,0.16 0.16,0.03 0.35,0.48 0.15,0.09 0.06,0 0,-0.09 0.15,0.01 0.3,0.19 0.15,0.23 0.17,0.03 0.08,0.29 -0.11,0.04 0.29,0.53 0.72,0.79 0.15,0.26 0.11,0.04 0.57,0.78 0.5,0.84 0.08,0.73 0.3,0.1 0.05,0.16 0.11,0.11 -0.08,0.2 0.3,0.25 0,0.08 -0.19,0.12 -0.12,0.34 0.05,0.16 0.16,0.19 0.04,0.2 0.09,0.01 0.16,0.27 0.25,0.23 -0.01,0.08 0.24,0.45 0.25,0.14 0.11,0.2 0.17,0.04 0.08,0.23 0.25,0.19 0.04,0.11 0.14,0 0.13,0.11 0.04,0.15 0.3,0.14 0.19,0.12 0.03,0.14 0.15,0.03 0.24,0.18 0.02,0.07 -0.07,0 -0.11,0.16 0.13,0.27 -0.07,0.14 0.09,0.11 0,0.14 0.26,0.18 0.14,-0.04 0.25,0.04 0.22,-0.14 0.02,-0.22 -0.14,-0.12 -0.09,-0.42 -0.2,-0.11 -0.24,-0.25 -0.19,-0.11 -0.15,0.05 -0.13,-0.15 0.74,-0.14 0.26,0.37 0.14,0.07 0.04,0.18 0.16,0.05 0.26,0.31 0.11,0 0.15,0.18 0.69,0.01 0.31,0.3 0.19,-0.01 0.18,0.09 0.16,0.29 0.5,0.24 0.42,0.48 0.02,0.19 0.21,0.16 0.06,0.37 0.24,0.34 0.06,0.38 0.13,0.3 -0.03,0.48 0.1,0.27 -0.09,0.3 0.06,0.29 -0.13,0.14 0.01,0.2 0.11,0.07 0.5,0.07 0.46,0.31 0.15,0.01 0.16,0.2 0.19,-0.03 0.11,0.14 0.3,-0.01 0.41,-0.19 0.7,-0.03 0.39,0.22 0.39,-0.01 0.4,0.12 0.56,0.16 1.15,0.57 0.72,0.48 0.15,0.2 0.13,0.04 0.21,0.23 0.29,0.44 -0.06,0.15 0.21,0.25 0.06,0.23 -0.01,0.3 0.11,0.24 0.05,0.35 0.31,0.3 0.09,0.23 0.37,0.15 0.14,0.15 0,0.37 -0.1,0.3 -0.07,0.01 -0.15,-0.49 -0.21,-0.25 -0.19,-0.11 -0.49,-0.96 -0.3,-0.22 -0.47,-0.14 -0.29,-0.01 -0.11,0.14 -0.26,0.12 -0.05,0.09 -0.24,0 -0.22,-0.04 -0.27,0.22 -0.16,0.23 -0.55,0.23 -0.37,0.41 -0.16,0.03 -0.57,-0.1 -0.14,-0.22 -1.11,-0.43 -0.3,-0.29 -0.49,0.12 -0.99,0.08 -0.94,-0.27 -0.19,-0.16 -0.06,-0.18 -0.24,-0.07 0.01,-0.18 -0.18,-0.18 -0.07,-0.19 -0.17,-0.08 -0.04,-0.11 -0.16,-0.05 -0.6,0.11 -0.67,0.43 -0.5,0.22 -0.04,-0.05 0.06,-0.08 0.31,-0.16 0.15,-0.16 0.3,-0.08 0.44,-0.24 0.3,-0.04 0.09,-0.09 -0.09,-0.15 -0.22,-0.14 -0.19,-0.03 -0.21,-0.19 -0.44,-0.12 -0.16,0.01 -0.55,-0.27 -0.34,-0.04 -0.4,0.08 -0.23,0.18 0.05,0.2 -0.05,0.05 0.13,0.16 -0.09,0.11 0.01,0.14 -0.01,0.11 -0.03,0.14 0.19,0.04 0.03,0.26 -0.11,0 -0.21,-0.04 -0.07,0.3 0.04,0.05 -0.14,0.05 0.03,0.1 -0.09,0.18 -0.12,0.01 -0.03,0.15 -0.09,-0.04 -0.13,0.29 -0.13,-0.01 -0.13,-0.33 -0.13,0.11 0.09,0.11 -0.1,0.16 0.34,0.23 -0.04,0.18 -0.12,0.07 0.16,0.12 -0.04,0.16 0.14,-0.04 -0.01,0.11 -0.08,0.04 0.04,0.12 0,0.12 0.11,0.18 -0.13,0.18 0.06,0.38 -0.08,0.24 0.08,0.23 -0.08,0.04 -0.02,0.34 0.14,0.2 0.1,0.33 0.09,-0.01 0.01,-0.56 -0.1,-0.29 0.07,-0.05 0.08,0.07 0.04,0.23 0.03,0.52 -0.21,0.54 -0.06,0.03 -0.14,-0.12 0,0.3 -0.15,0.05 0,0.27 0.11,0.29 0,0.35 0.06,0.18 -0.05,0.14 0.05,0.11 -0.13,0.09 -0.03,0.12 -0.1,0.01 -0.13,0.37 -0.05,0.62 0.08,0.23 0.11,0.04 -0.11,0.27 0.25,0.15 0.08,0.19 -0.01,0.19 0.1,0.15 0.35,0.11 0.1,-0.1 -0.08,-0.16 0.08,-0.03 0.21,-0.56 0.22,-0.11 0.29,0.04 0.24,0.69 -0.1,0.34 0.02,0.41 -0.22,0.22 -0.13,0.01 -0.01,-0.28 0.09,-0.3 -0.11,-0.07 -0.24,0.03 -0.1,0.14 0.09,0.09 -0.51,-0.01 -0.11,0.12 0.01,0.12 0.15,0.22 0.25,0.08 0.01,0.12 0.34,0.16 -0.04,0.31 0.14,0.57 -0.03,0.16 0.16,0.37 -0.06,0.15 0.09,0.27 -0.06,0.35 0.03,0.6 0.14,-0.09 0.14,0.2 -0.22,0.76 -0.03,1.31 0.08,0.41 -0.32,0.01 0,-0.08 -0.19,-0.19 -0.16,-0.64 -0.2,0.07 -0.12,0.2 0.09,0.31 -0.11,0.18 0.08,0.04 0.04,0.14 0,0.33 0.11,0.09 0.09,-0.01 -0.01,-0.33 -0.06,-0.09 0.21,0.08 0.04,0.6 0.2,0.72 -0.06,0.26 0.09,0.1 0,0.2 0.29,0.2 0.01,0.13 -0.06,0.11 -0.15,1.18 -0.1,0.22 0,0.43 -0.16,0.3 0.04,0.11 0.11,-0.18 0.04,0.22 -0.5,0.91 0.01,0.26 -0.09,0.01 0,-0.24 -0.12,0.16 0.01,0.14 0.21,0.01 -0.08,0.26 -0.29,0.14 -0.09,-0.04 -0.01,0.07 0.16,0.41 0.08,-0.07 -0.06,-0.18 0.12,0.07 0.08,0.66 0.14,0.42 0.04,0.42 0.45,0.3 -0.05,0.08 0.22,0.16 -0.01,0.12 0.08,0.13 0.08,0.07 0.15,-0.01 0.17,0.37 0.34,0.43 0.29,0.24 0.05,0.28 0.33,0.79 -0.09,0.24 0.16,0.26 0.13,0.04 -0.08,0.24 0.09,0.19 0.03,0.34 0.1,0.03 -0.08,0.15 0.16,0.3 0.05,-0.2 0.11,0.16 0.06,0.37 -0.1,1.51 0.1,0.35 -0.11,0.08 -0.05,0.38 0.16,0.65 0.04,0.69 0.19,0.08 0.05,0.27 0.44,0.99 -0.15,0.69 0.01,0.24 0.14,0.34 -0.01,0.97 0.25,0.11 0.31,0.32 0.26,0.08 0.01,0.27 0.17,0.36 0.1,0.46 0.72,0.77 0.13,0.5 0.17,-0.01 -0.04,0.18 0.2,0.27 -16.2,15.3 0,0 -2.18,2.06 -10.54,-3.13 -1.18,-0.28 -11.66,27.08 -5.51,1.02 -1.01,0.11 -0.1,0.08 -1.37,0.25 -0.79,0.08 -0.33,0.11 -4.12,0.76 -0.97,0.12 -0.26,0.09 -9.41,1.76 -3.3,9.78 0,0 -41.37,-0.09 0,0 -28.08,0.09 -19.54,0.03 -0.9,-0.04 -2.85,0.07 -3.62,-0.17 -2.62,0.04 -0.51,-0.05 -15.54,-0.05 0.53,-2.3 0.65,-2.36 0,0 8.11,-2.75 2.75,-1.44 1.96,-1.96 1.44,-3.14 4.27,0.68 2.71,-1.17 1.39,-1.73 1.05,-1.96 1.18,-2.88 0.39,-2.36 1.18,-4.45 2.75,-0.65 2.11,1.33 1.46,1.9 2.35,2.28 0,0 3.44,1.52 2.94,-0.88 0,0 2.62,-0.79 3.14,-2.75 3.72,-2.45 2.73,-1.59 2.31,-2.58 1.18,-3.41 -0.26,-5.54 2.99,-1.64 0,0 3.16,-0.32 2.62,1.83 1.83,1.18 2.57,0.77 0,0 2.88,-0.43 1.46,1.92 2.76,2.94 2.71,0.4 1.19,-2.02 0,0 -0.21,-3.31 -2.23,-3.52 0,0 -3.32,-2.34 -1.02,-0.98 0,0 0,0 0,0 -3.02,-0.25 -2.48,-2.47 -0.98,-0.85 0.07,-1.2 1.31,-1.41 1.24,-2.05 1.11,-1.34 1.57,-1.63 1.05,-2.05 0.65,-2.19 0.78,-1.13 0.24,-1.37 -0.78,-1.46 -0.83,-1.91 0,0 0,0 0,0 -1.57,-0.36 -0.98,-3.4 -0.07,-2.34 0.39,-2.2 0.59,-0.99 0.72,-0.73 0,0 0,0 0,0 0.16,-1.84 0,0 0,0 0,0 -1.07,-0.41 -0.2,-4.53 -1.44,-1.63 -1.63,-0.92 -0.98,-1.78 -0.33,-1.42 -0.2,-1.85 -1.18,-2.13 -0.92,-1.14 -0.33,-2.99 -0.78,-1.85 0,-6.03 0,0 0,0 0,0 1.02,-3.55 0.13,-2.37 1.99,-2.97 3.19,-2.65 0.39,-4.01 -0.23,-1.56 -3.06,-5.11 -1.91,-4.52 -0.15,-9.58 0,0 0.09,0.21 -0.09,-0.21 0,0 -0.46,-3.34 -3.3,-5.5 0,0 0,0 0,0 -4.34,-3.02 -1.83,-1.77 -2.39,-1.49 0,0 -2.62,-2.38 0,0 -1.55,-2.46 -0.8,-2.53 0,-5.38 0.8,-1.83 1.72,-1.83 1.89,-3.1 5.77,-3.76 1.97,-3.15 1.74,-5.5 0,0 0.19,-1.09 -0.03,-3.62 0,0 -0.35,-3.43 0,0 0,0 0,0 -1.13,-2.48 -0.62,-2.18 -1.43,-2.29 -3.39,-2.29 -4.48,-0.96 -6.08,0.06 -2.47,0.83 -2.93,2.04 -2.07,1.53 -1.43,0.76 -1.69,0.12 0,0 -1.96,-0.88 0.19,-1.64 -0.34,-0.13 -2.05,-2.8 -1.04,-2.59 -1.81,-1.33 -4.03,-1.21 -2.73,-1.72 -0.81,-0.85 -1.16,-1.77 -1.21,-3.6 -0.43,-2.98 0,0 0,0 0,0 -1.64,-0.53 -0.98,-1.28 -0.46,-1.6 -2.01,-2.56 -5.82,-4.86 -2.58,-0.95 0,0 0,0 0,0 -0.5,-0.33 0,0 -0.52,-2.5 -1.49,-3.84 -2.3,-3.78 -1.4,-3.08 0,0 -1.29,-0.91 -2.56,-2.17 0,0 -2.84,-2.18 0,0 0,0 0,0 -1.37,-4.42 -1.34,-0.75 -2.09,-1.05 -1.15,-0.1 -3.89,-1.52 -1.39,-1.07 -3.4,-1.19 -0.94,-0.46 -1.48,-1.75 -0.61,-1.56 -0.58,-4.71 0.67,-3.39 0,0 0.37,-3.35 -0.25,-4.74 -1.12,-3.63 -0.5,-5.87 -3.35,-7.7 -0.62,-6.03 -0.12,-2.24 0.75,-2.81 1.24,-2.25 1.12,-1.83 1.17,-1.71 0.04,-2.48 0,0 0.07,-4.29 1.28,-3.71 0,0 0.46,-1.62 0,0 0,0 0,0 -3.73,-0.5 0,0 2.75,-0.89 0.62,-3.66 2.98,-5.08 2.11,-0.85 1.37,-2.12 0.87,-1.69 1.49,-2.12 2.23,-2.83 0.75,-0.71 0.12,-3.25 1.74,-1.42 0.12,-3.11 0.12,-1.42 0,0 2.7,2.52 2.04,2.11 3.12,4.75 3.34,2.34 0,0 0,0 z"
                                title="RedSea"
                                id="RedSea"
                                onClick={() => setActivatedGov(old => old === "Red Sea" ? "" : "Red Sea")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Beheira" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Beheira")}
                                d="m 256.09971,9.9518 0.1,0.17 -0.04,0.06 -0.3,-0.07 -0.13,0.09 -0.34,0.04 -0.08,0.07 -0.07,0.57 0.01,0.06 0.16,0.06 0.01,0.1 0.14,0 0.06,-0.09 -0.06,-0.1 0.16,-0.17 0.22,-0.03 0.41,0.23 0.06,0.1 0.16,0.01 0.01,-0.1 -0.13,-0.09 -0.05,-0.19 -0.16,-0.16 0.02,-0.06 0.45,0.51 0.39,0.1 0.04,-0.06 -0.11,-0.06 -0.01,-0.09 -0.25,-0.13 0.04,-0.13 -0.26,-0.22 -0.04,0.07 -0.06,-0.04 0.03,-0.09 0.06,0 0.32,0.07 0.03,0.12 0.5,-0.12 0.02,0.1 0.42,0.13 0.24,0.23 0.41,0.09 0.93,0.42 0.41,4.9 2.79,3.22 0,6.9 3.66,-0.35 5.37,5.06 0,0 -0.01,2.83 0.78,0.45 0.78,0.75 -0.13,2.63 0.84,0.3 0,2.63 -0.58,0.68 0.97,0.45 0.39,0.45 0.06,0.68 0.78,0.9 -0.52,0.9 -0.84,0.83 0,1.65 0.65,0.23 -0.13,1.65 -0.32,1.13 0.32,1.28 0.88,-0.11 0,0 -0.26,4.66 0.13,0.4 1.07,0.07 -0.46,1.82 1.18,0.88 -0.26,1.73 0.58,1.54 0.1,4.03 -0.08,1.85 0,0 0,0 0,0 -1.39,0.16 -0.14,1.82 0,0 -6.92,7.08 -2.66,0.35 -7.4,7.47 0,0 -4.74,6.53 -0.74,1.31 -0.75,0.45 -1.55,-3.11 0,0 -1.68,-1.06 -2.83,-0.55 -7.56,-5.6 -1.96,-0.96 -6.37,-5.04 -4.26,-0.14 0,0 -3.16,-1.54 -1.27,-2.03 0,0 0,-5.72 0,0 1.43,-4.22 1.42,-2.08 1.79,-0.26 0,0 0,0 0,0 3.9,-1.27 4.91,-2.33 5.06,-7.56 -5.62,-6.44 -2.28,-3.74 1.17,-2.09 0,0 0.7,-2.76 -2.3,-2.03 3.2,-2.64 0,0 4.56,-2.63 1.19,-3.14 1.11,-1.81 0.02,-2.23 0,0 0.41,0.16 1.09,0.17 0.09,0.17 0.82,-0.06 0.13,0.07 0.29,0.03 0.05,-0.13 0.15,-0.03 -0.08,0.09 0.14,0 0.07,0.12 0.1,0 0.06,-0.12 0.06,0.22 0.29,-0.13 0.33,-0.03 0.05,0.13 0.04,-0.2 0.7,-0.09 0.02,-0.07 1.1,-0.41 1.24,-0.67 0.21,-0.26 0.61,-0.41 1.04,-0.96 0.35,-0.41 0.06,-0.2 0.16,-0.06 0.04,-0.15 0.16,-0.13 0.04,-0.15 0.21,-0.22 0.29,-0.51 -0.01,-0.12 0.08,-0.03 0.08,-0.23 0.16,-0.2 0.11,-0.36 0.34,-0.64 0.05,-0.29 0.19,-0.32 0.27,-0.76 0,-0.15 0.1,-0.14 0.29,-1.09 0.14,-0.33 0.09,-0.07 -0.04,-0.09 0.1,-0.5 0.05,-0.16 0.14,-0.15 -0.03,-0.07 0.46,-0.48 0.77,-0.19 z"
                                title="Beheira"
                                id="Beheira"
                                onClick={() => setActivatedGov(old => old === "Beheira" ? "" : "Beheira")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Beni Suef" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Beni Suef")}
                                d="m 227.04971,151.2518 1.82,-2.37 0.39,-3.14 0.59,-5.6 1.18,-4.97 0.07,0.01 0.17,-1.08 0,0 2.86,0.42 5.71,0.71 10.68,1.98 2.11,1.13 -0.17,1.69 1,0.4 1.43,-0.09 22.49,-6.28 5.66,-8.87 3.47,-5.24 2.82,-2.04 0,0 0.06,0.35 0,0 0.53,-0.78 2.31,0.97 0,0 2.27,0.52 0,0 0.95,0.63 0,1.65 0.13,2.69 0,0 -0.13,1.42 -0.12,3.11 -1.74,1.41 -0.12,3.26 -0.75,0.7 -2.23,2.83 -1.49,2.12 -0.87,1.69 -1.37,2.12 -2.11,0.84 -2.98,5.08 -0.62,3.66 -2.75,0.89 0,0 -2.89,-2.01 -2.43,-1.41 -33.41,1.11 -1.52,-0.03 -8.49,0.29 z"
                                title="BeniSuef"
                                id="BeniSuef"
                                onClick={() => setActivatedGov(old => old === "Beni Suef" ? "" : "Beni Suef")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Cairo" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Cairo")}
                                d="m 323.00971,74.2918 0.15,3.56 0,0 1.23,4.26 0.65,4.88 1.28,8.59 -0.04,4.35 -2.19,25.47 -0.78,14.24 0,0 -1.23,0 -6.48,-1.58 -4.48,-1.76 -4.44,-0.63 -3.24,-2.34 -3.12,-4.76 -2.04,-2.11 -2.7,-2.52 0,0 -0.13,-2.69 0,-1.65 -0.95,-0.63 0,0 -0.53,-0.12 0,0 -0.21,-1.52 0.18,-1.48 0.3,-0.75 0.76,-0.54 0.3,-0.67 0.06,-1.62 0.29,-0.61 0.53,-0.81 0,-1.82 0.12,-2.03 0.18,-1.14 0.77,-0.61 0.11,-0.95 0,-1.01 -1.06,-0.95 -0.12,-1.96 0.06,-0.75 1.22,-0.14 0.04,-0.76 0.1,-7.68 -2.65,-0.91 -0.17,-1.82 -0.93,-1.64 0.91,-0.71 -0.16,-5.75 0,0 1.93,0.2 0,0 1.86,-1.69 4.4,-1.77 4.51,-0.3 0,0 4.59,0 3.15,-1.9 6.29,-4.4 0,0 0.01,0.29 0.28,0.1 z"
                                title="Cairo"
                                id="Cairo"
                                onClick={() => setActivatedGov(old => old === "Cairo" ? "" : "Cairo")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Dakahlia" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Dakahlia")}
                                d="m 299.46971,7.6818 0.25,0.1 0.06,0.1 0.3,0.13 0.04,0.08 0.85,0.33 0.54,0.44 1.09,0.57 0.99,0.65 1.14,0.53 0.73,0.46 0.25,0.03 0.16,0.13 0.17,-0.03 0.3,0.21 0.51,0.17 0.5,0.28 0.43,0.1 0.17,-0.04 0.18,0.1 0.29,-0.05 0.12,0.02 0.17,0.1 0.21,-0.09 0,0 0,1.81 -1.56,0.82 -1.56,0.63 0,1.55 2.43,-0.04 1.78,-0.24 0.1,2.02 0.99,0.2 1.2,0.63 0.96,0.92 -0.34,2.48 -0.76,3.9 4.1,-2 3.13,-1.74 0,0 1.72,-0.39 1.85,0.27 0.5,-0.26 0.21,-0.48 0.09,-0.63 0.42,-0.03 -0.03,0.27 -0.3,0.69 -0.03,0.47 2.78,-0.05 0.21,-0.42 0.33,0.36 0.71,0.41 1.38,0.27 0.44,0.72 0.18,0.77 -0.36,1.14 0.54,0.51 0.39,0.8 0.49,0.44 -0.25,0.31 -0.18,0.48 0.06,0.74 0.39,0.21 -0.18,0.06 0,0 -3.35,1.29 -4.16,0.56 -0.93,0.19 -3.59,-0.07 -1.09,1.81 -0.15,1.98 -2.88,2.98 -0.14,2.89 -2.27,0.18 -0.16,1.63 -1.32,0.72 -0.21,1.47 -8.82,0.24 -1.32,1.17 0,6.49 0.84,0.77 -0.92,2.37 -2.02,1.99 0,0 -1.17,-0.07 -1.07,-1.79 -0.91,-0.59 0,0 0.01,-0.12 0,0 1.24,-1.27 -0.13,-3.45 -0.67,-0.28 0.09,-1.01 -0.98,-1.05 -0.31,-3.34 0.24,-2.52 0.62,-2.71 0.31,-2.26 1.01,-1.17 0.78,-0.45 0.97,-2.36 -2.18,0.28 -1.91,0.13 -0.23,-0.11 0.32,-1.53 0.63,-1.07 0,0 -0.1,-2.98 0,0 1.64,0.31 0.7,-0.54 -0.24,-1.7 -0.07,-10.62 -0.46,-1 -0.08,-2.9 -1.09,0.09 -0.08,-2.09 1.01,-0.91 0,0 1.23,0.1 -0.02,-2.7 0.54,0.19 0.47,0.34 0.64,0.28 z"
                                title="Dakahlia"
                                id="Dakahlia"
                                onClick={() => setActivatedGov(old => old === "Dakahlia" ? "" : "Dakahlia")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Damietta" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Damietta")}
                                d="m 327.79971,12.5318 0.29,0.26 0.04,0.22 0.51,0.89 0.54,0.39 0.36,0.42 0.09,0.01 0.21,0.25 0.4,0.26 0.21,0.26 0.3,0.16 0.24,0.29 0.36,0.2 0.21,0.22 0.31,0.15 0.06,0.1 0.38,0.17 0.21,0.2 0.13,-0.01 0.57,0.25 0.32,0.26 0.08,-0.01 0.31,0.23 0.16,0.03 0.44,0.32 0.13,0 0.15,0.19 0.47,0.28 0.05,0.13 0.29,0.13 0.04,0.09 0.09,0 0.2,0.22 0.11,0.06 0.1,-0.06 0.16,0.04 0.29,0.48 -0.66,0.11 -2.21,-1.4 -1.34,-0.66 -0.72,-0.54 -0.96,-0.9 -0.78,-0.63 -0.9,-0.42 -0.87,-0.24 -0.63,0.12 0.15,0.33 0.81,0.36 0.09,0.27 -0.48,-0.03 -0.57,-0.24 -0.48,-0.6 0.81,-0.72 0.09,-1.13 -0.54,0.03 0.09,-0.51 0.29,-0.28 z m -4.19,-2.77 0.15,0.75 -0.16,-0.09 -0.1,-0.23 -0.01,-0.34 0.12,-0.09 z m -0.19,-1 -0.1,0.1 -0.33,-0.31 -0.07,-0.15 0.08,-0.09 0.39,0.3 0.03,0.15 z m 1.24,0.06 0.12,0.44 0.21,0.29 -0.29,0.46 -0.36,-0.11 -0.09,-0.39 -0.27,-0.6 -0.49,-0.39 -0.09,-0.17 0.03,-0.17 0.22,-0.07 0.47,0.86 0.25,0.25 0.07,-0.07 -0.25,-0.44 -0.13,-0.68 0.05,-0.14 0.23,0.11 0.08,0.49 0.24,0.33 z m 0.24,-1.06 0.29,0.1 0.05,0.09 0.14,0.01 0.08,0.1 0.29,0.15 0.04,0.08 0.17,0.06 0.74,0.89 0.41,0.36 0.67,0.41 0.16,0.25 0.15,0.33 0.1,0.64 -0.17,0.29 -0.16,0.06 0.16,-0.29 -0.02,-0.09 -0.1,0 0.11,-0.09 0.04,-0.22 -0.05,0 -0.05,0.16 -0.09,-0.01 0.09,-0.31 -0.19,-0.28 -0.08,0 -0.06,-0.33 -0.1,0.06 -0.05,-0.23 -0.08,-0.04 0.09,0.63 -0.06,0.58 0.01,-0.67 -0.17,-0.63 -0.04,0.06 0.11,0.32 0,0.2 -0.09,-0.01 0,-0.29 -0.16,-0.41 -0.16,-0.16 -0.2,-0.06 -0.21,-0.32 -0.16,0.06 0.04,0.25 0.05,0 0.04,0.19 0.08,0.07 0.1,0.45 0.14,0.28 0.08,0.44 0.17,0.22 0.06,0.2 0.13,0.09 0.06,0.31 0.13,-0.52 -0.05,0.54 0.11,0.32 0.22,0.32 -0.05,0.06 -0.4,-0.65 -0.25,-0.21 -0.16,-0.39 -0.25,-0.17 -0.31,-0.83 -0.4,-0.17 -0.15,-0.32 -0.03,-0.28 0.06,-0.13 -0.74,-0.77 -0.21,-0.1 -0.21,-0.43 -0.18,-0.18 0.47,-0.04 z m -2.44,11.16 -0.46,0.49 0.13,-0.05 0.33,-0.44 0.16,0.08 -0.46,0.6 -0.24,0.62 -0.14,0.05 -0.46,-0.17 -0.16,0.35 0.11,0.43 -0.08,0.31 -0.13,0.05 -0.41,-0.34 0,0.31 0.35,0.4 0.46,0.01 0.06,0.15 -0.14,0.1 -0.49,0.03 -0.06,0.25 0.05,0.2 0.29,0.17 -1.78,0.4 0,0 -3.13,1.74 -4.1,2.01 0.76,-3.91 0.34,-2.48 -0.96,-0.91 -1.2,-0.63 -0.99,-0.2 -0.1,-2.02 -1.78,0.24 -2.42,0.03 0,-1.54 1.56,-0.64 1.56,-0.82 0,-1.81 0,0 0.48,0.03 0.2,-0.07 0.15,0.04 1.95,-0.44 0.3,-0.01 0.15,-0.1 0.08,0.03 2.12,-0.61 0.46,-0.07 0.6,-0.23 0.41,-0.06 0.21,-0.12 0.34,-0.06 0.13,-0.1 0.6,-0.2 0.05,-0.07 0.09,0.01 0.16,-0.51 -0.1,0.92 -0.17,0.58 0.14,0.1 0.16,-0.09 0.52,0.6 0.15,0.04 0.01,-0.13 -0.26,-0.23 0.11,-0.41 -0.26,-0.07 -0.04,-0.1 -0.09,-0.03 -0.1,-0.32 0.13,-0.23 0.19,-0.07 -0.09,-0.33 0.05,0.1 0.3,-0.03 0.71,-0.41 0.86,-0.38 0.66,-0.52 0.74,-0.44 0.35,-0.35 0.09,0.03 0.05,0.14 0.13,0.03 0.54,0.09 0.24,-0.09 0.25,0.06 -0.42,0.13 -0.49,0.48 -0.2,0.72 0.25,0.04 0.29,-0.21 0.01,0.24 -0.34,0.62 0.34,0.4 0.04,0.32 0.46,0.5 -0.02,1.06 0.23,0.37 0.03,0.34 -0.17,-0.04 -0.24,-0.57 -0.85,-1 -0.33,0.06 -0.03,-0.44 0.07,-0.17 -0.08,-0.12 -0.26,0.16 -0.36,0.47 -0.08,0.86 0.05,0.17 0.87,-0.52 0.1,0.06 0.03,0.12 -0.1,0.16 0.41,0.05 0.13,0.32 -0.22,0.4 0.26,0.28 0.17,0.44 0.24,0 0.13,-0.08 0.52,0.07 -0.56,0.5 -0.41,-0.02 -0.71,-0.22 -0.23,0.4 0.18,0.42 -0.12,0.36 0.16,0.03 0.22,-0.15 0.09,0.19 -0.2,0.25 -0.71,0.1 -0.21,0.15 0.56,0.3 0.38,-0.07 0.1,0.43 0.55,0.18 0.22,0.16 0.34,0.09 0.29,-0.22 0.17,0.29 -0.17,0.19 -0.6,1.97 z"
                                title="Damietta"
                                id="Damietta"
                                onClick={() => setActivatedGov(old => old === "Damietta" ? "" : "Damietta")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Fayoum" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Fayoum")}
                                d="m 231.26971,134.1018 6.34,-7.21 2.11,-1 6.95,-8.21 1.49,-0.14 6.2,-7.1 3.73,-0.99 3.97,-2.56 3.97,-2.7 1.62,-0.28 2.51,-1.51 1.45,-1.24 0.13,-1.09 14,-0.13 -0.18,1.4 -0.1,2.78 0.77,0.96 1.33,2.8 0.77,5.03 0.76,3.43 0,0 0.24,1.57 0,0 -2.82,2.04 -3.47,5.24 -5.66,8.87 -22.49,6.28 -1.43,0.09 -1,-0.4 0.17,-1.69 -2.11,-1.13 -10.68,-1.98 -5.71,-0.71 z"
                                title="Fayoum"
                                id="Fayoum"
                                onClick={() => setActivatedGov(old => old === "Fayoum" ? "" : "Fayoum")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Gharbia" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Gharbia")}
                                d="m 288.18971,52.9018 -0.47,-1.21 -4.43,0.05 -0.38,-0.81 -1.16,-0.05 -0.07,-0.9 -2.42,0 -0.15,0.99 -3.52,0.44 0,0 -0.88,0.11 -0.33,-1.27 0.33,-1.13 0.12,-1.65 -0.64,-0.23 0,-1.65 0.84,-0.83 0.52,-0.9 -0.78,-0.9 -0.06,-0.68 -0.39,-0.45 -0.98,-0.45 0.59,-0.68 0,-2.63 -0.85,-0.3 0.13,-2.63 -0.77,-0.76 -0.78,-0.45 0.01,-2.82 0,0 0.56,0.52 1.92,3.49 1.23,0.01 0,0 0.3,1.05 4.67,0 0.16,-1.01 0.23,-0.89 5.22,0.09 0,-5.61 0.95,0.07 5.2,-0.43 0,0 1.5,0.07 1.21,-0.03 0.1,3.08 0,0 -0.63,1.07 -0.32,1.53 0.23,0.11 1.91,-0.13 2.18,-0.28 -0.97,2.36 -0.78,0.45 -1.01,1.17 -0.31,2.26 -0.62,2.71 -0.24,2.52 0.31,3.34 0.98,1.05 -0.09,1.01 0.67,0.28 0.13,3.45 -1.24,1.27 0,0 -3.78,-1.74 0,0 -3.09,-0.02 -0.06,-1.03 0,0 z"
                                title="Gharbia"
                                id="Gharbia"
                                onClick={() => setActivatedGov(old => old === "Gharbia" ? "" : "Gharbia")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Giza" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Giza")}
                                d="m 294.59971,80.2218 0.16,5.75 -0.91,0.71 0.93,1.64 0.17,1.82 2.65,0.91 -0.1,7.68 -0.04,0.76 -1.22,0.14 -0.06,0.75 0.12,1.96 1.06,0.95 0,1.01 -0.11,0.95 -0.77,0.61 -0.18,1.14 -0.12,2.03 0,1.82 -0.53,0.81 -0.29,0.61 -0.06,1.62 -0.3,0.67 -0.76,0.54 -0.3,0.75 -0.18,1.48 0.21,1.52 0,0 -1.74,-0.4 0,0 -2.31,-0.97 -0.53,0.78 0,0 -0.3,-1.92 0,0 -0.76,-3.43 -0.77,-5.03 -1.33,-2.8 -0.77,-0.96 0.1,-2.78 0.18,-1.4 -14,0.13 -0.13,1.09 -1.45,1.24 -2.51,1.51 -1.62,0.28 -3.97,2.7 -3.97,2.56 -3.73,0.99 -6.2,7.1 -1.49,0.14 -6.95,8.21 -2.11,1 -6.34,7.21 0,0 -0.17,1.08 -0.07,-0.01 -1.18,4.97 -0.59,5.6 -0.39,3.14 -1.82,2.37 0,0 -1.14,4.34 -1.58,2.9 -1.18,3.35 -1.58,5.36 -1.18,5.57 -2.37,2.23 -2.56,2.01 -4.73,3.11 -3.75,3.34 -2.56,0.67 -2.57,2 -3.74,1.33 -4.14,3.11 -3.16,1.55 -5.32,1.12 -1.58,0.88 -1.58,1.11 -0.78,1.78 -0.4,2.22 -0.59,1.77 -0.99,2.21 -1.38,2.76 0,0 -56.78,0.14 0,0 -0.68,0 0,0 -1.28,0 0,0 20.39,-45.43 41.89,-10.06 32.28,-31.75 6.46,-8.29 6.62,-1.63 22.68,-15 3.07,-0.4 0,0 0.76,-0.45 0.73,-1.31 4.74,-6.52 0.89,0.04 -0.89,-0.04 0,0 7.4,-7.47 2.66,-0.35 6.92,-7.08 0,0 1.44,-0.12 0.68,-0.58 2.09,0.14 0.09,3.18 1.42,-0.07 0.91,0.89 0.07,1.8 0.9,0.89 1.63,0.3 0.8,-0.9 0.89,0.52 0,0 0.76,0.19 1.95,-0.66 0,-0.08 0,0 1.65,2.78 2.41,1.48 0,0 z"
                                title="Giza"
                                id="Giza"
                                onClick={() => setActivatedGov(old => old === "Giza" ? "" : "Giza")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Ismailia" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Ismailia")}
                                d="m 337.64971,29.5218 0.06,0.2 2.68,-0.49 0.72,-0.76 0.99,0.19 0.56,1.61 2.2,0.17 1.94,0.97 3.19,1.16 0,0 3,1.94 3.08,0.81 0,0 0.24,6.82 1.05,17.58 3.21,5.05 1.67,2.97 1.41,3.85 0.77,2.79 0,0 -5.74,-0.27 0,0 -4.61,0.52 -1.73,1.41 -6.14,-0.43 -2.64,-0.81 -18.62,0.11 -1.91,0.18 0,0 -0.03,-0.79 0,0 -1.38,-3.54 -0.28,-0.1 -0.02,-0.29 0,0 -1,-4.9 -0.42,-4.56 -1.68,-0.87 -0.17,-1.65 2.27,0.1 0.42,0.87 3.78,0.19 0.59,-0.87 5.04,-0.29 0.26,-0.94 4.74,-6.74 -0.08,-2.71 -0.91,-3.85 1.81,-4.11 0.23,-1.84 1.7,-0.05 -0.2,-5.64 -1.96,-0.09 -0.67,-1.21 0,0 -0.67,-0.86 -0.04,-0.29 0.29,-0.3 0.77,-0.4 -0.03,-0.31 -0.23,-0.25 0.03,-0.5 1.28,-0.01 -0.01,-1.85 0.4,-0.5 0.48,-0.04 0.23,0.39 0.03,0.68 0.14,0.43 -0.28,0.44 0.05,0.2 0.4,0.05 0.16,0.19 -0.08,0.6 -0.34,0.64 z m 1.99,-6.68 0.38,0.49 0.57,-0.33 -0.03,0.3 0.18,0.26 0.32,1.14 -0.14,0.37 -0.31,-0.18 -0.44,-0.06 -0.53,-0.38 -0.26,-0.06 -0.16,0.42 -0.42,0.28 -0.37,-0.44 -0.47,0.08 -0.52,-0.23 -0.56,0.27 -0.68,0.06 -0.31,-0.23 -0.13,-0.37 -0.53,-0.49 0.08,-0.35 0.48,0.08 0.02,-0.44 0.4,-0.15 1.93,0.05 0.39,0.3 0.43,-0.26 0.68,-0.13 z m -1.45,-2.65 0.06,0.09 0.15,0.04 0.56,0.09 0.36,0.13 0.37,0.03 0.27,0.16 0.64,0.01 0.4,0.17 0,0 -0.32,0.37 0,0 -0.53,-0.22 -1.01,-0.22 -1.1,-0.62 0.15,-0.03 z"
                                title="Ismailia"
                                id="Ismailia"
                                onClick={() => setActivatedGov(old => old === "Ismailia" ? "" : "Ismailia")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "South Sinai" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("South Sinai")}
                                d="m 456.90971,114.7118 0.02,0.11 -0.08,0.06 -0.04,-0.14 0.1,-0.03 z m -89.91,-23.09 1.87,0.07 0.24,-0.28 0.02,0.12 6.61,-0.43 9.77,0.29 8.36,1.18 1.02,0.29 4.26,-0.07 8.2,1.92 1.77,0.86 0.05,0.11 7.97,5.01 3.34,2.21 3.6,1.18 3.86,0.88 6.04,3.68 0.08,-0.03 0.91,0.28 2.63,0.88 2.62,1.07 1.43,-0.12 0.31,0.27 3.86,0.59 3.47,0.29 3.73,0.73 3.74,-0.15 2.39,0.58 0,0 -0.31,0.33 -0.2,0.1 -0.2,-0.07 -0.3,0 -0.45,0.26 -0.39,0.13 -0.16,0.4 -0.33,0.16 -0.06,0.38 -0.11,0.17 0.06,0.37 -0.16,0.47 -0.5,0.63 -0.25,0.03 -0.09,0.16 -0.26,-0.14 0.2,0.27 0.02,0.18 -0.15,0.11 -0.25,0.07 -0.15,0.13 0,0.07 -0.09,0.01 -0.01,0.16 -0.09,0 -0.04,0.3 0.09,0.3 -0.14,-0.01 -0.08,-0.08 -0.2,0.06 0.1,0.54 -0.06,0.31 -0.21,0.23 -0.09,0.21 -0.12,0.04 -0.3,-0.04 -0.2,0.07 -0.12,0.2 -0.08,0.17 0,0.31 -0.1,0.13 0.03,0.43 -0.15,0.34 -0.17,0.11 0.01,0.04 0.15,-0.03 -0.1,0.08 -0.2,-0.03 -0.39,0.1 -0.19,0.3 -0.04,0.18 -0.22,0.14 -0.06,0.44 -0.42,0.19 -0.06,0.1 0.01,0.41 0.19,0.37 -0.01,0.23 -0.21,0.43 0.08,0.85 -0.11,0.26 -0.3,0.28 -0.03,0.13 0.1,0.21 0.08,0.65 0.09,0.09 0.09,0.34 -0.05,0.17 0.06,0.26 -0.09,0.07 -0.04,0.27 0.06,0.13 -0.06,0.11 -0.1,0.03 -0.1,0.5 -0.17,0.28 -0.38,0.27 -0.16,0.77 -0.76,0.13 -0.24,0.13 -0.17,0.21 -0.09,0.4 0.1,0.18 0.01,0.2 -0.13,0.23 0.04,0.18 -0.15,0.24 0,0.21 -0.11,0.1 0.1,0.24 -0.17,0.11 -0.17,0.64 -0.17,0.16 0.25,0.41 0,0.1 -0.06,0.27 -0.17,0.16 -0.02,0.13 -0.09,0.07 0,0.18 -0.1,0.11 0.04,0.26 -0.08,0.06 0,0.1 0.14,0.28 0.02,0.36 -0.14,0.28 -0.27,0.28 -0.04,0.2 0.05,0.06 -0.08,0.01 0.04,0.07 0.09,-0.06 0.1,0.27 0.13,0.06 0.01,0.08 0.07,-0.01 -0.02,0.16 0.1,0.04 0.01,0.13 -0.05,0.27 0.46,0.47 0.04,0.41 0.05,0.06 -0.09,0.2 0.09,0.95 -0.2,0.23 -0.61,0.17 0,0.16 -0.24,-0.07 -0.44,0.13 -0.19,0.36 -0.35,0.2 0.03,0.17 -0.13,0.31 0.05,0.5 0.35,0.4 0.01,0.31 -0.25,0.26 0.09,0.43 0.13,0.24 -0.05,0.26 0.14,0.4 -0.1,0.2 0.02,0.31 -0.16,0.27 0.1,0.16 -0.07,0.23 0.14,0.35 0.01,0.27 -0.14,0.26 -0.6,0.14 -0.16,0.27 -0.27,0.24 -0.05,0.18 -0.03,0.48 0.16,0.34 -0.13,0.33 0.21,0.23 -0.08,0.35 0.05,0.18 -0.05,0.45 0.06,0.07 -0.06,0.3 0.05,0.13 -0.08,0.31 0.16,0.38 0.01,0.2 -0.07,0.2 -0.09,0.04 -0.03,0.23 -0.12,0.11 0.02,0.4 -0.05,0.11 0.24,0.41 0.08,0.28 -0.2,0.21 -0.25,0.68 -0.17,0.18 0,0.14 -0.21,0.3 -0.07,0.33 -0.27,0.27 -0.08,0.25 -0.27,0.23 -0.11,0.27 -0.28,0.2 0.11,0.33 -0.04,0.21 -0.14,0.14 -0.28,0.11 -0.09,0.13 -0.03,0.24 0.24,0.27 0.01,0.18 -0.11,-0.03 -0.15,0.3 -0.01,0.2 0.09,0.28 -0.24,0.07 -0.17,0.21 -0.14,0 -0.13,0.08 -0.09,0.24 -0.28,0.06 -0.22,0.67 -0.06,0.04 -0.05,0.88 -0.22,0.31 -0.17,0.08 -0.04,0.14 -0.16,0.1 -0.27,0.44 -0.31,0.3 -0.05,0.31 -0.09,0.11 -0.02,0.69 -0.13,0.72 0.32,0.47 0.08,0.41 -0.17,0.1 0.01,0.23 -0.19,0.69 -0.25,0.45 -0.41,-0.14 0.29,-0.03 0.05,-0.06 -0.04,-0.16 -0.2,0.06 -0.14,-0.13 -0.2,0 -0.38,0.13 -0.07,0.34 -0.22,0.13 -0.05,0.24 -0.1,0.03 -0.15,0.28 -0.01,0.48 -0.09,0.24 -0.25,0.21 -0.22,0.03 -0.13,0.16 -0.04,0.42 0.11,0.2 0,0.17 -0.27,0.54 -0.06,0.48 -0.17,0.23 0,0.47 0.09,0.13 0.01,0.17 -0.06,0.2 -0.21,0.25 -0.08,0.39 0.03,0.21 -0.21,0.2 -0.29,0.13 -0.11,0.27 -0.19,0.08 -0.09,0.11 -0.1,0.52 -0.31,0.38 -0.13,0.28 0.11,0.28 -0.13,0.14 -0.04,0.41 0.07,0.11 -0.15,0.41 0.08,0.18 0,0.97 0.07,0.18 0,0.32 0.14,0.18 0.14,0.44 -0.05,0.3 -0.17,0.24 0.01,0.39 0.13,0.42 0.27,0.45 -0.1,0.2 0.14,0.1 0.04,-0.1 0.1,-0.01 0.21,0.18 -0.19,0.07 -0.06,0.27 0.31,0.11 0.17,0.21 0.03,-0.24 0.39,0.45 -0.06,0.16 0.2,0 0.16,0.59 -0.03,0.66 -0.06,0.17 0.05,0.31 -0.06,0.13 -0.21,0.11 -0.01,0.16 -0.14,0.18 0,0.2 0.09,0.21 -0.02,0.27 0.1,0.11 -0.09,0.31 0.06,0.13 -0.09,0.16 -0.14,0.06 -0.04,0.25 0.01,0.2 -0.05,0.13 -0.04,0.37 -0.19,0.17 -0.01,0.13 -0.16,0.16 0.06,0.56 0.09,0.1 0,0.11 0.22,0.11 0.19,0.24 0.01,0.27 -0.11,0.31 -0.04,0.59 0.22,0.31 0.04,0.2 -0.46,2.12 -0.32,0.14 -0.09,0.28 0.16,0.2 -0.07,0.14 -0.14,0.03 -0.01,0.1 -0.24,0.27 -0.19,-0.01 -0.19,0.13 -0.39,0 -0.09,0.14 0.01,0.11 -0.14,0.08 -0.06,0.14 -0.39,0.04 -0.01,0.27 0.09,0.34 -0.14,0.07 -0.06,0.16 -0.14,0.08 -0.17,0.07 -0.22,-0.01 -0.08,0.07 -0.09,0.14 0.1,0.21 -0.01,0.22 -0.13,0.21 -0.23,0.07 -0.17,-0.13 -0.11,0 -0.26,0.15 -0.03,0.17 -0.07,0.07 -0.19,-0.04 -0.19,-0.15 -0.23,-0.04 -0.24,0.11 -0.02,0.11 0.17,0.16 -0.2,0.63 0.03,0.22 0.11,0.2 -0.39,0.21 -0.05,0.22 0.14,0.2 0.06,0.28 -0.22,0.23 -0.15,0.79 -0.28,-0.11 -0.09,0 -0.1,0.13 -0.14,-0.01 -0.17,-0.21 -0.13,-0.52 -0.19,-0.07 -0.14,0.1 0.03,0.14 0.16,0 0.05,0.08 -0.16,0.14 -0.1,0.27 -0.12,-0.07 0.06,-0.28 -0.09,-0.08 -0.11,0.13 -0.44,0.07 0.06,0.27 0.1,0.04 0.02,0.44 -0.24,0.36 -0.08,0.28 -0.31,0.07 0.01,0.11 0.13,-0.01 0.09,0.1 0.03,0.24 -0.2,0.2 -0.09,0.6 -0.19,0.46 -0.17,0.04 -0.26,0.01 -0.37,0.18 -0.24,-0.41 -0.09,-0.01 -0.24,0.24 -0.16,0.07 -0.29,-0.14 -0.17,-0.21 -0.06,0.04 0.01,0.18 -0.16,0.06 -0.15,-0.03 -0.03,0.28 0.1,0.27 0.33,0.32 0.06,0.24 0.22,0.18 0.11,0.01 0.1,-0.1 0.61,0.1 0.27,-0.15 0.46,0.07 -0.06,0.18 -0.12,0.1 0.07,0.21 -0.06,0.11 0.15,0.27 0.06,0.52 0.2,0.37 -0.05,0.07 -0.08,0.13 -0.17,-0.01 -0.31,-0.44 -0.03,0.21 0.2,0.11 0.06,0.2 -0.13,0.14 -0.14,0 -0.24,-0.15 0.05,-0.32 -0.1,-0.15 0.01,-0.11 -0.19,-0.06 -0.36,-0.31 -0.27,-0.32 -0.21,-0.45 -0.19,-0.15 -0.06,-0.24 -0.31,-0.27 -0.08,-0.21 -0.14,-0.1 -0.2,0 -0.11,-0.17 -1.14,-0.32 -0.25,0.13 -0.03,0.13 -0.61,-0.32 -0.21,-0.01 -0.25,-0.21 -0.35,0.03 -0.6,-0.11 -0.63,0.07 -0.47,0.34 -0.13,-0.38 -0.49,-0.16 -0.14,-0.14 -0.26,-0.01 -0.71,-0.42 -0.05,-0.1 -0.29,-0.15 -0.16,-0.42 -0.16,-0.2 -0.4,-0.27 -0.21,-0.42 -0.22,-0.1 -0.07,-0.14 -0.16,-0.03 -0.26,-0.22 -0.01,-0.14 -0.31,-0.48 -0.17,-0.08 -0.17,-0.22 -0.08,-0.22 -0.07,-0.24 -0.14,-0.41 -0.94,-0.13 -0.05,-0.21 -0.1,-0.03 -0.46,-0.04 -0.04,0.13 -0.06,-0.01 0,-0.14 -0.2,-0.35 -0.62,-0.65 -0.5,-0.63 -0.01,-0.32 -0.22,-0.24 -0.35,-0.1 -0.66,0.31 -0.41,-0.13 -0.15,0.06 -0.05,0.13 -0.19,-0.07 -0.1,-0.32 -0.21,-0.21 -0.19,-0.35 -0.27,-0.32 -0.67,-0.29 -0.49,-0.34 -0.19,-0.06 -0.11,-0.13 -0.17,-0.01 -0.46,-0.77 -0.14,0.01 -0.11,-0.1 -0.1,0.01 -0.02,-0.29 -0.56,-0.72 -0.31,-0.06 -0.14,0.07 -0.06,-0.17 -0.6,-0.31 -0.16,-0.01 -0.1,-0.42 0.32,-0.49 -0.16,-0.24 -0.14,-0.38 -0.06,-0.06 -0.2,0.01 -0.21,-0.14 -0.26,0.06 0,-0.2 -0.36,-0.17 -0.1,-0.1 -0.11,-0.14 -0.36,-0.23 -0.44,0.08 -0.19,-0.32 0.19,-0.29 -0.01,-0.15 -0.15,-0.18 -0.01,-0.18 -0.25,-0.17 -0.22,-0.34 -0.3,-0.29 -0.1,-0.31 -0.21,-0.22 -0.13,-0.56 -0.11,-0.14 -0.31,-0.08 -0.14,-0.11 -0.09,-0.76 0.04,-0.49 -0.13,-0.28 -0.19,-0.11 -0.47,-0.03 -0.13,0.25 -0.02,-0.39 -0.29,-0.04 -0.17,-0.1 -0.29,-0.2 -0.21,-0.28 -0.06,-0.37 0.04,-1.01 -0.11,-0.52 -0.01,-0.41 -0.26,-0.3 -0.04,-0.16 -0.21,-0.17 -0.1,0 -0.17,0.07 0.13,0.25 -0.01,0.08 -0.08,0 -0.34,-0.34 -0.11,-0.2 -0.19,-0.16 0.04,-0.39 -0.26,-0.1 -0.05,-0.15 0,-0.58 -0.47,-0.16 -0.1,-0.44 -0.31,-0.69 -0.29,-0.14 -0.49,-0.06 -0.77,-0.76 -0.52,-0.14 -0.24,-0.14 -0.27,-0.04 -0.35,-0.18 -0.31,-0.34 -0.26,-0.41 -0.31,-0.21 -0.31,-0.1 -0.08,-0.17 -0.54,-0.14 -0.11,-0.16 -0.24,-0.16 -0.24,-0.04 -0.74,-0.4 -0.01,-0.13 -0.13,-0.07 -0.06,-0.17 -0.17,-0.14 -0.11,-0.07 -0.25,-0.21 0.01,-0.1 -0.1,-0.18 -0.31,-0.23 -0.14,0.04 -0.16,-0.66 -0.2,-0.04 -0.01,-0.18 -0.17,-0.07 -0.54,-0.54 -0.3,-0.42 -0.08,-0.25 -0.2,-0.28 0.04,-0.55 -0.11,-0.3 -0.1,-0.1 -0.17,0 -0.16,-0.27 -0.24,-0.23 -0.7,-0.14 -0.03,-0.08 -0.26,-0.2 -0.19,-0.01 -0.05,-0.27 -0.2,-0.2 -0.19,-0.06 -0.11,-0.18 -0.14,-0.03 -0.37,-0.31 -0.32,-0.58 -0.44,-0.21 -0.17,-0.61 -0.09,-0.1 -0.05,-0.33 -0.86,-0.58 -0.05,-0.24 0.3,0.01 0.09,0.21 0.2,-0.03 0.03,-0.11 -0.1,-0.14 0.12,-0.08 0,-0.13 -0.07,-0.06 -0.03,-0.52 -0.24,-0.37 -0.07,-0.34 -0.24,-0.24 -0.62,0.04 -0.31,0.08 -0.04,0.23 0.19,0.1 0.09,0.25 0.1,-0.01 0.01,0.11 -0.07,0.04 0.09,0.14 -0.08,0.08 0.14,0.06 0.06,0.13 -0.06,0.1 -0.15,0 -0.08,-0.11 -0.15,-0.18 -0.22,-0.68 -0.29,-0.37 -0.11,-0.25 0.06,-0.55 -0.07,-0.21 0.04,-0.23 -0.22,-0.48 0.02,-0.16 0.08,-0.1 0.05,-0.38 -0.07,-0.21 -0.51,-0.55 0.06,-0.1 -0.2,-0.25 -0.08,-0.3 -0.13,-0.35 -0.06,-0.28 -0.11,-0.1 0.11,-0.42 0.13,-0.2 -0.05,-0.14 0.2,-0.41 0.09,-0.27 -0.04,-0.44 0.05,-0.44 0.34,-0.34 0.05,-0.21 0.11,-0.1 -0.06,-0.25 0.15,-0.14 0.02,-0.31 0.29,-0.59 0.01,-0.23 0.17,-0.47 -0.16,-0.25 -0.46,-0.42 -0.11,-0.51 -0.09,-0.2 -0.12,-0.08 -0.08,-0.5 -0.2,-0.03 -0.32,-0.31 -0.1,-0.08 -0.19,-0.13 -0.11,-0.17 -0.05,-0.13 -0.29,0.07 0,-0.23 0.08,-0.01 0.02,-0.1 -0.11,-0.3 -0.16,-0.01 0.03,-0.23 -0.19,-0.43 -0.06,-0.28 0.01,-1.08 0.29,-0.52 -0.03,-0.3 -0.09,-0.14 -0.17,-0.08 0.06,-0.26 0.21,-0.24 0.14,-0.34 0.15,-0.04 0.14,-0.45 -0.05,-0.21 -0.19,-0.23 -0.09,-0.14 -0.02,-0.16 -0.15,-0.14 -0.01,-0.13 -0.15,-0.08 -0.13,0.03 -0.14,0.21 -0.1,0.01 0.24,-0.3 -0.02,-0.06 -0.13,0 -0.08,-0.04 0.2,-0.07 0,-0.65 0.13,-0.37 -0.03,-0.25 0.08,-0.34 0.14,-0.18 0.13,-0.4 0.05,-0.58 -0.39,-0.34 -0.22,0.06 -0.32,-0.07 -0.2,-0.28 0,-0.27 -0.14,-0.24 -0.49,-0.17 -0.2,-0.23 -0.17,0.06 -0.09,-0.16 -0.2,-0.03 -0.09,-0.35 -0.19,-0.23 -0.06,-0.01 -0.11,0.13 -0.09,-0.14 -0.46,0.07 -0.35,-0.14 -0.06,-0.54 -0.5,-0.16 -0.24,-0.27 -0.21,-0.08 -0.04,-0.3 0.11,-0.21 -0.01,-0.47 -0.23,-0.17 -0.12,-0.19 -0.16,0.06 0,-0.21 -0.16,-0.23 -0.22,-0.08 -0.05,-0.21 -0.08,0 -0.21,-0.28 -0.51,-0.33 -0.15,-0.18 -0.16,-0.41 -0.19,-0.23 -0.16,-0.03 -0.13,0.07 -0.19,-0.13 -0.03,-0.27 -0.25,-0.17 -0.25,-0.4 -0.04,-0.24 -0.11,-0.03 -0.19,-0.27 -0.29,-0.14 -0.66,-0.06 -0.15,-0.23 -0.04,-0.17 -0.24,-0.2 0,-0.11 -0.11,-0.26 -0.4,-0.6 -0.08,-0.3 -0.71,-0.23 -0.59,0.14 -0.28,-0.39 -0.48,-0.48 -0.21,-0.11 -0.21,0 -0.24,-0.23 -0.14,-0.03 -0.05,-0.1 -0.19,-0.1 -0.11,-0.51 -0.22,-0.2 -0.03,-0.29 -0.08,-0.08 0.27,-0.74 -0.12,-0.11 -0.01,-0.21 -0.19,-0.13 0,-0.13 -0.17,-0.17 0.03,-0.27 -0.24,-0.31 -0.38,-0.27 -0.13,0.06 -0.3,-0.04 -0.04,-0.28 -0.24,-0.36 -0.17,0 -0.31,-0.14 -0.01,-0.47 -0.07,-0.19 0.16,-0.28 0,-0.27 -0.09,-0.33 -0.22,-0.27 -0.41,-0.3 0,-0.13 0.1,-0.06 -0.04,-0.34 0.09,-0.36 0.06,-0.04 0.02,-0.3 0.21,-0.16 -0.31,-0.93 -0.31,-0.24 -0.06,-0.14 -0.42,-0.03 -0.14,-0.13 -0.14,-0.3 -0.14,-0.13 -0.12,-0.17 0.01,-0.21 -0.29,-0.3 -0.22,-0.1 -0.29,0.04 -0.12,-0.16 -0.82,-0.38 -0.01,-0.06 0.1,-0.06 -0.02,-0.23 -0.1,-0.14 -0.14,-0.06 -0.1,-0.47 -0.15,-0.04 -0.02,0.31 0.04,0.08 -0.09,0.1 -0.08,-0.04 -0.13,0.11 -0.13,-0.3 0.15,-0.13 0.02,-0.27 0.08,-0.01 0.09,-0.14 -0.11,-0.31 -0.09,0 -0.1,0.14 0.02,0.14 0.15,0.01 0,0.06 -0.49,0.24 -0.09,0.1 0.02,-0.21 0.22,-0.21 0.24,-0.56 -0.04,-0.4 -0.17,-0.38 -0.31,-0.39 -0.13,-0.09 -0.14,0 0.26,-0.33 0,-0.2 -0.09,-0.14 0.04,-0.47 -0.09,-0.37 0.2,-0.27 0.04,-0.41 -0.24,-0.14 0.03,-0.27 -0.05,-0.1 -0.17,-0.01 -0.01,-0.41 -0.16,-0.13 0.09,-0.44 -0.07,-0.19 -0.1,-0.07 -0.01,-0.13 -0.08,-0.08 -0.19,0 -0.29,-0.11 -0.77,-0.23 -0.06,-0.11 0.01,-0.19 0.44,-0.43 0.13,-0.46 -0.2,-0.64 -0.07,-0.97 -0.16,-0.16 -0.06,-0.3 0.05,-0.13 0.1,-0.01 -0.01,-0.14 0.1,-0.1 0.06,-0.24 -0.05,-0.14 0.17,-0.37 -0.13,-0.67 0.47,-0.84 -0.09,-1.06 -0.05,-0.1 -0.1,-0.01 -0.09,-0.29 -0.11,-0.09 -0.01,-0.17 -0.39,-0.66 -0.09,0 -0.21,-0.17 -0.06,0 0.03,0.09 -0.08,0.04 -0.19,-0.03 -0.21,-0.73 -0.16,-0.27 -0.42,-0.42 0,0 6.93,-5.2 2.57,-0.59 0,0 0,-0.84 z"
                                title="SouthSinai"
                                id="SouthSinai"
                                onClick={() => setActivatedGov(old => old === "South Sinai" ? "" : "South Sinai")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Qalyubia" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Qalyubia")}
                                d="m 293.73971,80.1318 -2.41,-1.48 -1.65,-2.78 0,0 -0.17,-4.63 0,0 -0.88,-1.74 -0.4,-1.88 0,0 1.28,-2.66 2.27,-1.57 0,0 2.41,-1.84 0.52,-1.23 0,0 0.4,-4.51 0,0 0.91,0.59 1.07,1.79 1.17,0.07 0,0 -1.27,1.3 -0.08,2.48 -0.66,0.04 0,2.62 1.12,1.06 1.12,1.47 1.21,2.39 1.02,2.69 2.13,1.66 2.45,1.34 0.2,0.27 1.8,1.08 0,0 -4.51,0.3 -4.4,1.77 -1.86,1.69 0,0 z"
                                title="Qalyubia"
                                id="Qalyubia"
                                onClick={() => setActivatedGov(old => old === "Qalyubia" ? "" : "Qalyubia")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Kafr El Sheikh" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Kafr El Sheikh")}
                                d="m 288.07971,3.6818 0.28,0.09 0.15,-0.03 0.43,0.07 0.06,0.08 0.13,-0.05 0.06,0.13 0.08,-0.01 0.2,0.16 0.26,0.09 0.79,0.14 0.97,0.3 0.51,0.01 0.14,0.09 0.22,0.03 0.19,0.13 0.17,0 0.37,0.26 0.94,0.16 0.87,0.34 0.65,0.12 1.83,0.79 0.02,2.71 -1.25,-0.11 0,0 -1.01,0.91 0.08,2.09 1.09,-0.09 0.08,2.9 0.46,1 0.07,10.62 0.24,1.7 -0.7,0.54 -1.64,-0.31 0,0 0,-0.1 -1.19,0.03 -1.52,-0.07 0,0 -5.2,0.43 -0.95,-0.07 0,5.61 -5.22,-0.09 -0.23,0.89 -0.16,1.01 -4.67,0 -0.3,-1.05 0,0 -1.21,-0.01 -1.92,-3.49 -5.93,-5.58 -3.66,0.35 0,-6.9 -2.8,-3.22 -0.41,-4.9 1.97,-0.01 2.51,-0.54 6.87,-2.33 3.01,-0.76 1.94,-1.27 0.62,0.2 1.07,-0.49 3.34,-0.83 1.49,-0.79 0.17,0.6 -0.17,0.65 -1.08,-0.3 -1.08,0.24 -2.38,0.72 -1.53,0.85 -0.57,0.58 -1.07,0.48 -0.78,0.48 -1.67,0.66 -1.61,0.53 -1.08,1.02 -0.36,0.84 -0.59,-0.06 -0.78,0.36 -1.49,0.05 -0.36,0.54 -0.78,0.12 -1.07,-0.24 -0.84,0.3 -0.18,0.66 -0.07,1.31 0.61,0 1.43,0.24 2.94,-0.08 0.11,-0.58 0.48,-1.37 1.07,0.3 0.88,0.72 0.84,0.5 0.67,-0.8 0.24,-0.72 0.72,-0.42 1.13,-0.83 0.54,-0.12 0.28,0.54 0.68,0.59 1.13,-0.3 1.72,0.25 1.27,0.09 1.12,-0.68 2.27,-0.6 0.85,-1.23 0.6,-1.41 0.65,-0.9 1.5,0.06 0.89,0.12 0.07,1.03 0.68,0.27 0.68,-1.84 -0.77,-1.01 -1.91,-1.2 -1.38,-0.59 -1.08,-0.14 -0.78,-0.22 0.91,-0.46 1.51,-0.39 0.36,-0.03 0.14,0.09 0.2,-0.09 z"
                                title="KafrElSheikh"
                                id="KafrElSheikh"
                                onClick={() => setActivatedGov(old => old === "Kafr El Sheikh" ? "" : "Kafr El Sheikh")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Qena" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Qena")}
                                d="m 358.96971,332.1218 -2.43,-1.21 -2.47,-2.19 -1.25,-0.96 -1.22,-3.2 -0.41,-3 0.18,-1.55 -0.76,-1.52 -0.15,-3.12 -1.15,-2.49 -0.64,-1.07 0.11,-2.34 0.92,-2.03 1.78,-1.84 2.64,-1.14 2.64,-2.47 1.66,-1.97 0.69,-1.52 0,-2.67 0.52,-1.59 1.55,-2.73 1.33,-1.97 -0.25,-2.25 -1.22,-2.27 -0.92,-0.76 -2.58,-0.13 -2.58,1.02 -1.89,1.4 -4.19,1.72 -1.15,0.7 -1.89,0.63 -1.84,0.13 -2.07,0.38 -1.43,0.44 -4.82,0.12 -1.6,-0.63 -4.86,-4.24 0,0 -2.18,-2.66 0,0 0.69,-1.13 0.98,-0.95 1.43,-0.96 1.32,0 1.21,-0.45 1.32,-0.95 0.69,-1.15 0.86,-0.13 1.21,0.64 0.23,1.4 0.64,1.72 0.94,0.45 0.72,0.5 0.98,1.34 1.21,0 0.46,-0.64 0.92,-1.01 0,0 1.69,-0.12 1.43,-0.76 2.07,-1.53 2.93,-2.04 2.47,-0.83 6.08,-0.06 4.48,0.96 3.39,2.29 1.43,2.29 0.62,2.18 0,0 0,0 0,0 1.13,2.48 0.35,3.43 0,0 0.03,3.95 -0.2,0.77 0,0 -1.74,5.5 -1.97,3.15 -5.77,3.76 -1.89,3.1 -1.72,1.83 -0.8,1.83 0,5.38 0.8,2.53 1.55,2.46 0,0 0.71,0.64 0,0 0.07,3.57 -1.02,3.54 z m -4.02,-24.12 1.84,0.34 1.45,-0.25 0.92,-1.35 0.61,-1.44 0.31,-1.6 -2.68,-0.25 -1.38,3.29 -1.07,1.26 z"
                                title="Qena"
                                id="Qena"
                                onClick={() => setActivatedGov(old => old === "Qena" ? "" : "Qena")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Luxor" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Luxor")}
                                d="m 360.07971,303.7018 -0.3,1.6 -0.62,1.44 -0.91,1.35 -1.46,0.25 -1.84,-0.34 1.08,-1.26 1.38,-3.3 z"
                                title="Luxor"
                                id="Luxor"
                                onClick={() => setActivatedGov(old => old === "Luxor" ? "" : "Luxor")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Minya" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Minya")}
                                d="m 178.18971,205.9718 1.38,-2.76 0.99,-2.21 0.59,-1.77 0.4,-2.22 0.78,-1.78 1.58,-1.11 1.58,-0.88 5.32,-1.12 3.16,-1.55 4.14,-3.11 3.74,-1.33 2.57,-2 2.56,-0.67 3.75,-3.34 4.73,-3.11 2.56,-2.01 2.37,-2.23 1.18,-5.57 1.58,-5.36 1.18,-3.35 1.58,-2.9 1.14,-4.34 0,0 2.51,-0.23 8.49,-0.29 1.52,0.03 33.41,-1.11 2.43,1.41 2.89,2.01 0,0 3.73,0.5 -0.46,1.61 0,0 -1.29,3.72 -0.06,4.29 0,0 -0.04,2.48 -1.18,1.7 -1.11,1.83 -1.24,2.24 -0.75,2.81 0.13,2.24 0.62,6.03 3.35,7.69 0.49,5.87 1.12,3.63 0.25,4.75 -0.37,3.34 0,0 -2.78,-0.19 -1.56,1.37 -2.43,-0.39 -1.83,-0.49 -3.03,0 0,0 -0.09,-1.95 -90.13,-0.18 0,0 z"
                                title="Minya"
                                id="Minya"
                                onClick={() => setActivatedGov(old => old === "Minya" ? "" : "Minya")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Monufia" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Monufia")}
                                d="m 283.28971,51.7418 0,0 0,0 4.43,-0.05 0.47,1.21 0,0 -0.17,-0.06 0.17,0.06 0,0 0.06,1.03 3.09,0.02 0,0 3.78,1.74 -0.41,4.63 0,0 -0.52,1.23 -2.41,1.84 0,0 -2.27,1.57 -1.28,2.66 0,0 0.4,1.88 0.88,1.74 0,0 0.17,4.71 -1.95,0.66 -0.76,-0.19 0,0 -0.89,-0.52 0,0 0,0 0,0 -0.8,0.9 -1.63,-0.3 -0.9,-0.89 -0.07,-1.8 -0.91,-0.89 -1.42,0.07 -0.09,-3.18 0,0 0,0 0,0 -2.09,-0.14 -0.68,0.58 -1.44,0.12 0,0 0.14,-1.83 1.38,-0.15 0.08,-1.85 -0.1,-4.03 -0.58,-1.54 0.26,-1.73 -1.17,-0.88 0.46,-1.81 -1.07,-0.08 -0.13,-0.4 0.27,-4.66 0,0 3.52,-0.44 0.15,-0.99 2.42,0 0.07,0.9 1.16,0.05 z"
                                title="Monufia"
                                id="Monufia"
                                onClick={() => setActivatedGov(old => old === "Monufia" ? "" : "Monufia")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Matruh" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Matruh")}
                                d="m 20.489711,0.2718 0.08,0.28 -0.01,0.35 -0.06,0.04 0.04,0.16 -0.07,0.1 0.01,0.12 -0.11,0.18 0.09,0.31 -0.05,0.12 0.25,0.2 0.05,0.1 -0.06,0.07 0.16,0.12 -0.07,0.15 -0.06,0 0.06,0.16 -0.08,0.26 0.09,-0.03 0.07,0.07 -0.02,0.13 0.24,0.25 0.26,0.6 0.1,0.06 0.01,0.17 -0.06,0.04 0.16,0.41 -0.03,0.1 0.15,0.17 0.02,0.17 0.15,0.19 0.14,0.01 -0.05,0.17 -0.41,0.1 -0.07,0.25 -0.1,0.07 -0.08,0.01 -0.07,-0.13 -0.11,0.09 0,0.39 0.16,0.34 0.15,0.16 -0.01,0.13 0.37,0.41 0.09,0 0.2,0.17 1.32,0.54 1.36,0.35 1.27,0.17 1.06,0.25 0.39,0 0.16,0.06 0.05,-0.04 1.41,0.04 1.17,-0.09 0.06,-0.07 0.05,0.12 0.37,0.03 0.07,-0.04 0.05,0.06 0.77,0.04 1.51,-0.29 0.89,-0.32 0.51,-0.07 0.01,-0.09 0.19,0.1 0.69,-0.01 1.2,-0.25 1.49,-0.47 1.06,-0.45 1.52,-0.42 0.01,-0.07 0.21,0.03 1.77,-0.67 0.15,0.06 0.01,-0.06 0.16,-0.01 0.2,-0.15 0.14,0 0.39,-0.2 0.34,-0.03 0.1,-0.09 0.51,-0.13 0.13,-0.1 0.22,0 0.06,-0.07 0.3,-0.07 0.15,-0.13 0.24,-0.03 0.24,-0.16 0.24,0 0.35,-0.2 0.51,-0.13 0.51,-0.28 1.01,-0.32 0.25,-0.16 0.19,0.01 0.39,-0.22 0.34,-0.04 0.26,-0.13 0.06,0.03 0.06,-0.07 0.14,-0.01 0.03,-0.09 0.09,0.07 0.15,-0.13 0.41,0 0.1,-0.09 0.1,0.03 0.12,-0.09 0.1,0.01 0.06,-0.1 0.21,0.03 0.02,-0.06 0.13,-0.01 0.09,0.04 0.19,-0.12 0.1,0.03 0.15,-0.12 0.22,0 0.35,-0.17 0.19,0.03 0.14,-0.07 0.31,-0.01 0.06,-0.09 0.31,0.01 0.07,-0.06 0.05,0.07 0.54,-0.03 0.06,0.06 0.15,-0.04 0.06,0.07 0.15,-0.01 0.24,0.13 0.21,-0.01 0.25,0.13 0.2,-0.04 0.13,0.15 0.24,0.06 0.21,0.03 0.21,-0.06 0.27,0.19 0.4,0.01 0.02,0.06 0.29,0 0.04,0.06 0.2,-0.03 0.1,0.07 0.11,-0.01 0.06,0.09 0.08,-0.1 0.19,0.01 0.06,0.12 0.1,-0.06 0.21,0.03 0.27,0.2 0.08,-0.06 0.09,0.07 0.16,-0.04 0.06,0.09 0.02,-0.09 0.11,0 0.01,0.12 0.25,0.09 0.26,-0.05 0.19,0.09 0.32,0 0.32,0.18 0.26,-0.04 0.08,0.12 0.17,-0.03 0.05,0.07 0.07,-0.03 0.19,0.09 0.1,-0.06 0.09,0.12 0.14,-0.03 0.17,0.09 0.05,-0.07 0.05,0.09 0.61,0.1 0.24,0.25 0.12,-0.01 0.01,0.07 0.2,-0.07 0.06,0.1 0.1,-0.04 0.06,0.06 0.22,0.01 0.08,0.12 0.11,-0.01 0.26,0.13 0.09,-0.05 0.11,0.09 0.14,0 0.07,0.09 0.15,-0.06 0.25,0.23 0.4,0.16 0.07,-0.03 0.92,0.28 0.15,-0.04 0.11,0.1 0.16,-0.01 0.05,0.1 0.4,0.01 0.15,0.13 0.09,-0.06 0.31,0.01 0.22,0.13 0.34,0.09 0.04,0.07 0.74,0.13 0.76,0.31 0.22,-0.04 0.12,0.1 0.11,-0.01 0.14,0.13 0.85,0.22 0.5,0.36 0.37,-0.04 0.11,0.04 0.02,0.1 0.23,-0.03 0.16,0.19 0.27,-0.04 0.1,0.19 0.24,-0.04 0.16,0.12 0.37,-0.04 0.36,0.19 0.3,-0.06 0.47,0.03 0.11,0.18 0.29,0.15 0.19,0 0.05,-0.07 0.41,0.13 0.81,-0.06 0.16,0.1 0.37,-0.01 0.07,0.09 0.14,-0.06 0.22,0.14 0.74,0.03 0.05,0.07 0.35,0.03 0.26,0.12 0.04,0.09 0.29,0.06 0.52,0.31 0.17,-0.03 0.42,0.22 0.8,-0.03 1.48,-0.25 0.54,-0.33 0.06,0.45 0.41,0.22 0.36,0.01 0.05,0.15 0.16,0.04 0.15,-0.04 0.17,0.12 0.66,0.03 0.61,-0.15 0.05,0 -0.02,0.09 0.11,0.03 1.2,-0.09 0.27,0.01 0.36,0.12 0.36,-0.06 0.47,0.25 0.9,0.03 0.3,0.12 1.91,-0.1 0.12,0.04 0.16,0.22 0.59,0.23 0.44,0.07 0.12,0.25 -0.01,0.16 0.24,0.15 0.08,0.13 1.31,0.36 0.31,0.19 0.06,0.15 0.34,0.07 0.19,0.15 0.37,0.07 1.1,-0.06 0.85,0 0.3,0.06 0.08,-0.06 0.69,0.04 0.15,0.09 0.2,-0.09 0.289999,0.06 0.05,-0.07 0.74,-0.06 0.19,-0.03 0.7,-0.07 0.1,0.07 0.17,-0.09 0.09,0.07 0.15,-0.03 0.14,0.12 0.25,-0.07 0.04,0.2 0.19,0.09 0.1,0.2 0.14,0.03 0.27,0.23 0.16,0 0.04,0.1 -0.05,0.26 0.34,0.5 0.32,0.17 0.8,0.06 0.11,0.13 0.13,-0.09 0.46,0 0.06,0.17 0.26,0.17 0.29,-0.19 0.14,0.41 0,0.09 -0.07,0.03 0.05,0.26 0.22,0.22 0.5,0.22 0.29,-0.03 0.5,0.19 0.09,0.13 0.7,-0.07 0.71,0.04 0.9,-0.02 0,-0.06 0.89,0.03 0.13,0.06 1.5,0.12 0.09,0.07 0.41,0 0.31,0.12 -0.24,0.13 -0.22,0 -0.09,-0.15 -0.1,-0.04 -0.37,0.07 -0.14,-0.13 -0.31,0 -0.11,0.04 -0.1,0.17 -0.34,-0.22 -0.15,0.16 -0.1,0 -0.06,0.28 0.06,0.16 0.76,0.04 0.04,-0.1 0.44,0.01 0.05,-0.06 0.49,0.04 0.04,-0.13 0.14,-0.07 0.14,0.32 0.27,0.09 0.42,0.03 0.24,-0.19 0,-0.07 0.19,0.04 0.1,0.1 0.11,-0.06 0.04,-0.15 -0.1,-0.12 -0.47,-0.04 -0.04,-0.07 0.44,0.06 0.15,-0.04 0.2,0.04 0.09,-0.06 0.54,0.05 1.26,-0.19 0.66,-0.03 0.61,-0.13 0.15,0.04 0.46,-0.04 0,0.26 0.37,0.12 0.14,0.12 0.02,0.45 -0.1,0.01 -0.16,0.29 0.01,0.38 -0.05,0.12 0.3,0.47 0,0.16 0.17,0.1 0.04,0.13 0.09,0.03 0.16,0.26 0.15,0.09 0.06,0.35 -0.04,0.17 0.41,0.67 0.09,0.46 0.11,0.13 0.02,0.22 -0.09,0.1 0.07,0.07 -0.01,0.13 0.13,0.01 0.05,0.15 -0.02,0.36 0.17,0.15 0.2,0.38 0.35,0.31 -0.04,0.09 0.24,0.22 0.54,0.39 0.27,0.31 0.36,0.19 0.31,0.26 0.49,0.22 1.75,0.36 3.06,0.01 0.02,0.1 -0.07,-0.06 -0.15,0.01 0.02,0.13 0.14,0.17 0.25,0.09 0.12,0.2 0.32,0.22 0.81,0 0.31,-0.06 0.07,-0.13 0.34,0 0.21,-0.09 1.22,-0.03 0.04,0.06 -0.19,0.26 0.09,0.29 0.06,0.13 0.39,0.17 0.02,0.07 0.61,-0.06 0.19,0.03 0.09,0.1 0.2,0.06 0.86,0.1 0.06,-0.15 0.15,-0.1 -0.04,-0.17 -0.15,0.03 -0.22,0.25 -0.21,-0.01 0,-0.28 0.21,0.03 0.02,-0.06 0.41,0 0.34,-0.12 0.19,-0.03 0.16,-0.06 0.65,-0.07 0.39,-0.12 1.02,-0.42 0.26,0 0.01,-0.06 0.62,-0.2 0.11,-0.1 0.27,-0.04 0.11,-0.15 0.44,-0.07 0.02,-0.09 0.11,-0.04 0.6,-0.15 0.11,-0.09 0.11,0.07 0.08,-0.12 0.21,-0.06 0.16,-0.17 0.15,-0.04 0.11,0.04 0.05,-0.1 0.29,-0.16 0,-0.15 0.15,0.06 -0.04,-0.17 0.14,-0.15 0.11,0.01 0.06,-0.22 0.1,-0.01 0.1,-0.31 -0.06,-0.15 0.2,0.04 0.37,0.2 0.02,0.19 0.07,0.03 -0.11,0.17 0.04,0.13 -0.09,0.12 0.01,0.23 0.11,0.16 0.11,-0.04 -0.05,0.1 0.1,0.13 -0.09,0 -0.1,-0.1 -0.04,0.13 0.1,0.09 -0.11,0.01 -0.04,0.17 0.1,0.23 0.11,0.94 0.35,0.45 0.06,0.19 0.16,0.06 0,0.06 0.37,0.3 0.02,0.19 -0.13,0.36 0.2,0.33 -0.11,0.01 -0.11,0.12 0.16,0.48 -0.13,0.04 -0.02,0.16 0.2,0.39 0.11,0.07 -0.14,0.06 0.12,0.54 0.13,0.25 0.21,0.22 0.8,0.46 0.21,0.06 0.01,0.07 1.2,0.26 1.2,0.1 0.31,-0.04 0.84,0.07 0.11,-0.05 0.06,0.13 0.16,0.07 0.52,-0.04 0.76,0.06 0,-0.06 0.06,0 0.08,0.1 0.35,-0.07 0.11,0.06 0.21,-0.06 0.69,0.03 0.15,-0.04 0.3,0.06 0.37,-0.15 0.35,0.04 0.44,-0.1 0.56,0.04 0.39,-0.04 0.39,-0.13 0.85,0.01 0.35,0.12 0.67,0.54 0.8,0.2 0.26,0.2 0.17,-0.04 0.02,0.07 0.19,-0.07 0.54,-0.04 0.52,0.03 0.16,-0.06 0.32,0.03 0.04,0.06 0.12,-0.06 0.26,0.06 0.89,-0.09 0.86,0.09 1.11,0.35 0.51,-0.06 0.87,-0.35 0.35,-0.04 0.41,-0.2 0.41,-0.07 0.02,-0.09 0.34,-0.03 0.42,-0.13 1.86,-0.13 0.13,0.16 0.39,0.2 0.26,-0.09 0.06,0.25 0.11,0.15 0.45,0.19 0.16,0.32 0.16,0.04 0.02,0.07 0.19,0.06 0.25,0.19 0.26,0.09 0.17,-0.06 0.32,0.12 0.16,-0.01 0.29,0.25 0.34,0.12 0.17,-0.09 0.22,0 0.09,0.12 0.24,-0.03 0.17,0.06 0.16,-0.12 0.39,-0.03 0.09,-0.15 0.14,0 -0.06,0.09 0.01,0.13 0.34,0 0.02,0.29 0.09,-0.01 0.05,0.09 0.27,0.01 0.04,0.06 0.18,0.01 0.07,0.1 0.34,-0.03 0.29,0.1 0.05,0.06 -0.04,0.35 0.27,0.22 -0.07,0.13 0.04,0.1 0.56,0.3 1.96,0.54 0.51,-0.01 0.31,0.09 0.81,-0.06 0.81,0.06 -0.05,0.17 0.23,0.09 0.07,0.12 0.07,-0.04 0.04,0.15 -0.05,0 -0.05,0.26 0.19,0.17 0.06,-0.01 0,-0.22 0.11,0 0.07,0.17 0.49,0.1 0.62,-0.04 0.6,0.04 0,0.07 -0.11,-0.01 -0.07,0.1 -0.04,0.23 0.17,0.2 0.05,0.19 0.27,0.2 0.52,0.22 0.02,0.06 0.32,0.07 0.24,0.16 0.32,0.03 0.49,-0.06 0.81,0.16 -0.05,0.29 0.19,0.19 -0.02,0.13 0.06,0.06 -0.05,0.2 0.08,0.19 -0.09,0.07 0,0.23 0.19,0.2 0,0.09 0.06,0 0.26,0.3 0.45,0.26 0.17,0.22 0.51,0.27 0.44,0.12 0.21,0.17 0.35,0.15 0.16,0.25 0,0.15 0.51,0.54 0.64,0.33 0.3,0.04 0.9,0.32 0.1,0.07 0.05,0.19 0.13,-0.01 0.67,0.2 0.3,0.27 0.22,0.01 0.1,-0.09 0,0.07 -0.2,0.13 0.01,0.09 0.31,0.23 0.09,-0.01 0.1,0.2 0.1,-0.06 0.81,0.25 0.45,0.04 0.06,0.17 -0.86,-0.19 -0.24,-0.13 -0.15,0.06 -0.19,-0.07 -0.13,-0.17 -0.29,-0.1 -0.13,-0.19 -0.1,-0.01 0.16,0.27 -0.1,0 -0.13,-0.17 -0.02,0.04 0.09,0.14 0.21,0.07 -0.01,0.13 -0.22,-0.09 -0.06,-0.16 0.18,0.09 0.24,0.25 0.47,0.07 0.15,0.17 0.2,-0.04 0.16,0.17 0.24,-0.06 0.11,-0.12 0.16,0.03 0.43,0.3 0.31,-0.04 0.01,-0.1 -0.21,-0.08 0.05,-0.07 0.94,0.26 0.62,0.03 0.26,0.12 0.51,0.04 1.34,-0.09 1.14,0.03 0.65,-0.07 0.35,-0.14 0.1,0.04 1.26,-0.39 1.36,-0.27 0.06,-0.09 0.97,-0.27 1.29,-0.58 0.49,-0.17 0.07,0.03 0.82,-0.33 1.1,-0.27 0.72,-0.27 0.32,-0.2 0.14,0.03 0.5,-0.29 2.13,-1 0.94,-0.62 0.8,-0.42 0.09,0.06 0.85,-0.39 0.56,-0.32 0.15,-0.16 0.67,-0.33 0,-0.06 0.19,-0.07 0.19,-0.19 1.36,-0.72 0.05,-0.09 0.17,-0.06 0.09,-0.12 0.08,0.03 0.19,-0.17 0.07,0.03 0.01,-0.12 0.13,-0.1 0.11,0.01 0.14,-0.19 0.27,-0.16 0.03,-0.09 0.35,-0.19 0.27,-0.42 0.09,0 0.15,-0.15 0.06,0.03 0.14,-0.15 0.13,-0.01 0.51,-0.42 0.06,-0.12 0.17,-0.07 0.49,-0.43 0,0 -0.02,3.08 0.93,30.57 0,0 0,5.72 0,0 1.28,2.03 3.16,1.54 0,0 4.26,0.14 6.37,5.04 1.96,0.96 0,0 0,0 0,0 7.56,5.6 2.83,0.55 1.68,1.06 0,0 1.55,3.12 0,0 -3.07,0.4 -22.68,15 -6.62,1.63 -6.46,8.29 -32.28,31.75 -41.89,10.06 -20.39,45.43 0,0 -104.819999,-0.01 0,0 -0.81,0 0,0 -0.02,-80.41 -0.49,-0.91 -1.42,-3.99 -2.1,-4.35 -0.48,-1.51 -0.74,-1.08 -1.02,-2.73 -0.12,-0.72 0.77,-1.99 0.91,-1.12 0.12,-0.73 -0.09,-0.43 -1.74,-4.32 -1.69,-3.79 -0.13,-1.35 0.16,-3.66 -0.31,-1.69 -2.69,-9.13 -2.48,-2.75 0.51,-1.71 1.13,-2.27 1.13,-2.02 0.45,-1.19 0.61,-2.26 2.31,-1.95 1.07,-1.35 0.77,-1.72 0.67,-1.06 1.63,-1.7 0.96,-3.33 0.1,-0.79 -0.04,-0.87 0.26,-1.1 1.06,-2.38 0.48,-2.37 0.14,-1.19 1.06,-2.71 0.1,-0.67 -1.27,-4.36 0.02,-1.03 -0.44,-1.64 -0.79,-1.25 -0.52,-1.46 -0.29,-1.77 -1.17,-3.5 -0.66,-1.29 -0.95,-2.25 -0.24,-1.73 0.06,-1.34 0.41,-3.63 -0.06,-2.19 -0.26,-1.04 -0.63,-1.01 -0.26,-1.51 -0.11,-1.27 0.1,-0.52 3.49,-2.78 1.11,-1.11 4.45,-3.23 0.39,-0.8 0.33,-2.05 0.25,-0.74 0.27,-0.5 0.55,-0.67 0.69,-0.61 0.62,-1.19 0.72,-0.08 z"
                                title="Matruh"
                                id="Matruh"
                                onClick={() => setActivatedGov(old => old === "Matruh" ? "" : "Matruh")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Port Said" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Port Said")}
                                d="m 345.36971,23.8818 1.29,0.68 0.52,0.39 0.28,0.09 0.1,0.13 0.35,0.13 0.15,0.17 0.04,0.2 0.44,0.25 0.11,0.16 0.65,0.49 0.5,0.6 0.3,0.51 0.56,0.6 0.09,0.09 0.06,0.1 0.29,0.36 0.06,0.39 0,0.1 0.44,0.45 0.64,0.45 0.79,0.77 0.66,0.48 0.74,0.39 1.01,0.32 0.66,0.09 0,0 0,3.04 0,0 -3.08,-0.81 -3,-1.94 0,0 -3.19,-1.16 -1.94,-0.97 -2.2,-0.17 -0.23,-0.65 0.93,-0.75 1.31,-1.97 0.44,-0.96 0.48,-0.57 -0.25,-1.48 z m 0,0 -0.96,-0.15 -0.09,-0.09 0.04,-0.15 0.06,-0.07 0,-0.13 0.15,-0.03 0.2,0.07 0.2,0.16 0.08,-0.03 0.07,0.03 0.19,0.15 0.08,-0.03 -0.02,0.27 z m -0.96,-1.2 -0.01,0.61 -0.05,0.01 -0.02,0.12 -0.03,0.13 -0.5,-0.64 0.16,-0.03 0.1,0.25 0.01,-0.07 0.21,0 0.17,-0.83 0.08,-0.04 -0.12,0.49 z m -0.67,-3.11 0.03,0.07 -0.66,0.97 -0.14,0.1 -0.05,0.17 -0.22,0.2 -0.09,0.23 0.11,0.15 0.28,0.06 0.04,0.15 0.15,0.12 -0.14,0.29 0.19,0.28 0.33,0.17 0.21,0.01 -0.05,0.26 0.08,0.1 -0.61,0.75 -0.31,0.48 -0.26,0.7 -0.09,-1.44 0.18,-0.39 -0.26,-0.44 -0.22,-0.74 -0.31,0.57 0.13,0.39 -0.39,0.22 0.09,0.52 -0.3,0.72 -0.4,-0.54 -0.22,-0.79 -0.35,-0.66 0.26,-0.48 -0.04,-0.48 0,0 0.32,-0.37 0,0 0.14,0.03 0.14,-0.15 0.39,0.17 0.82,0.04 0.17,-0.1 0.13,0.01 0.92,-1.35 z"
                                title="PortSaid"
                                id="PortSaid"
                                onClick={() => setActivatedGov(old => old === "Port Said" ? "" : "Port Said")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Sohag" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Sohag")}
                                d="m 320.33971,254.3818 2.02,2.56 0.46,1.59 0.97,1.28 1.64,0.53 0.44,2.99 1.2,3.6 1.16,1.77 0.81,0.85 2.73,1.72 4.03,1.21 1.81,1.33 1.04,2.59 2.04,2.8 0.34,0.13 -0.19,1.64 1.96,0.88 0,0 -0.92,1.01 -0.46,0.63 -1.21,0 -0.97,-1.33 -0.73,-0.5 -0.93,-0.45 -0.64,-1.72 -0.23,-1.4 -1.21,-0.64 -0.86,0.13 -0.69,1.14 -1.32,0.96 -1.2,0.44 -1.32,0 -1.44,0.96 -0.97,0.95 -0.69,1.13 0,0 -0.23,-0.27 0,0 -0.81,-0.99 -1.62,-2.35 -0.9,-0.38 -1.44,-1.59 -2.87,-3.76 -2.32,-3.47 -1.07,-1.24 -0.14,-0.27 -2.21,-2.84 -1.95,-2.93 -2.13,-3.05 -1.09,-1.87 -2.01,-1.53 -2.51,-0.47 -3,-3.46 -2.52,-3.26 -0.52,-1.83 0,0 0.65,-0.2 1.19,-0.98 1.72,-0.96 0.86,-0.64 1.15,-1.66 0.57,-1.09 1.78,0.19 0.86,1.15 0.89,1.98 1.04,0.98 0.85,1.85 2.22,0.02 0,0 0.5,0.33 2.58,0.95 5.81,4.86 0,0 z"
                                title="Sohag"
                                id="Sohag"
                                onClick={() => setActivatedGov(old => old === "Sohag" ? "" : "Sohag")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Sharqia" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Sharqia")}
                                d="m 329.66971,30.6818 0.66,0.06 0.69,-0.18 0.98,0.38 0.06,0.45 0.36,0.27 0.3,-0.18 0.15,-0.39 -0.24,-0.27 -0.06,-0.47 0.22,-0.07 0.64,0.1 0.24,0.38 0.78,0.52 0.64,-0.06 0,0 0.67,1.21 1.96,0.08 0.19,5.65 -1.7,0.05 -0.23,1.84 -1.81,4.11 0.91,3.84 0.07,2.71 -4.74,6.73 -0.26,0.94 -5.04,0.3 -0.59,0.87 -3.78,-0.19 -0.42,-0.88 -2.26,-0.1 0.17,1.65 1.68,0.88 0.41,4.55 1.01,4.9 0,0 -6.29,4.4 -3.15,1.9 -4.59,0 0,0 -1.8,-1.08 -0.2,-0.27 -2.45,-1.34 -2.13,-1.66 -1.02,-2.69 -1.21,-2.39 -1.12,-1.47 -1.12,-1.06 0,-2.62 0.66,-0.04 0.08,-2.48 1.27,-1.3 0,0 2.02,-1.99 0.92,-2.37 -0.84,-0.77 0,-6.49 1.32,-1.17 8.82,-0.24 0.21,-1.47 1.32,-0.72 0.16,-1.63 2.27,-0.18 0.14,-2.89 2.88,-2.98 0.15,-1.98 1.09,-1.81 3.59,0.07 0.93,-0.19 4.16,-0.56 3.35,-1.29 0,0 -0.21,0.45 -0.87,0.42 z"
                                title="Sharqia"
                                id="Sharqia"
                                onClick={() => setActivatedGov(old => old === "Sharqia" ? "" : "Sharqia")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "North Sinai" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("North Sinai")}
                                d="m 368.12971,29.4018 0.24,0.15 0,0.15 0.1,0.09 0.05,0.22 -0.08,0.04 -0.06,0.2 -0.22,-0.22 -0.09,0 0.01,0.12 0.27,0.25 -0.03,0.12 -0.41,-0.51 0.05,-0.28 -0.13,-0.2 0.3,-0.13 z m 25.38,-2.22 0.86,0.52 -0.03,0.09 -0.37,-0.23 -0.36,-0.04 -0.04,-0.1 -0.09,-0.03 -0.06,0.04 0.07,0.03 0.01,0.13 -0.06,0 -0.2,-0.35 0.12,-0.04 0.1,0.07 0.05,-0.09 z m -13.74,-4.02 0.17,0.06 1.04,-0.04 0.49,0.06 0.19,0.09 0.84,0.06 0.35,0.13 0.14,-0.04 0.11,0.1 0.31,0.07 0.06,-0.12 0.35,0.19 0.09,-0.03 1.05,0.2 0.14,-0.03 0.19,0.07 0.2,-0.1 0.02,0.06 -0.15,0.3 -0.1,-0.03 -0.19,0.15 -0.2,-0.19 -0.11,0.03 -0.03,-0.1 -0.09,0.09 -0.16,-0.15 -0.22,0.06 -0.71,-0.25 -0.34,0.01 -0.13,-0.09 -0.67,-0.17 -0.17,-0.01 -0.1,0.07 -0.17,-0.13 -0.26,-0.06 -0.56,0 -0.26,-0.07 -0.49,0.01 -0.51,0.12 -0.34,-0.09 -0.64,0 -0.09,0.07 -0.35,-0.04 -0.55,0.12 -0.16,0 0.03,-0.09 -0.15,0.07 -0.04,-0.06 -0.14,0.01 0.04,0.31 -0.11,-0.01 -0.04,0.13 -0.06,-0.07 -0.17,-0.03 -0.09,0.12 0.47,0.19 0.05,0.19 0.21,0 0.11,-0.13 -0.04,0.12 0.14,-0.01 0,0.06 -0.62,0.1 -0.69,0.2 -0.72,-0.03 -2.02,1.14 -0.66,0.57 -0.16,0.01 -0.14,0.12 -0.41,0.12 -1.42,0.61 0.01,0.07 -0.14,0.09 -0.04,0.29 -0.08,0.07 -0.22,0 -0.06,0.16 -0.16,0.16 -0.26,0 -0.07,-0.09 0.02,-0.15 0.25,-0.15 0.59,-0.55 1.55,-0.87 0.71,-0.32 0.08,-0.13 1.26,-0.7 2.2,-1.39 0.84,-0.32 0.61,-0.12 1.55,-0.07 z m 50.5,0.4 3.71,12.31 2.56,7.51 3.96,8.31 1.3,5.41 -0.13,2.83 1.95,2.29 -0.93,2.62 0.11,1.59 3.14,2.05 0.92,3.44 5.33,14.97 -0.09,0.78 4.6,12.9 -0.03,2.48 0.81,1.4 0.2,0.97 -0.21,1.4 -0.42,1.41 0.18,1.5 0.21,0.86 0.59,1.12 1.13,1.33 0,0 -2.39,-0.58 -3.74,0.15 -3.73,-0.73 -3.47,-0.29 -3.86,-0.59 -0.31,-0.27 -1.43,0.12 -2.62,-1.07 -2.63,-0.88 -0.91,-0.28 -0.08,0.03 -6.04,-3.68 -3.86,-0.88 -3.6,-1.18 -3.34,-2.21 -7.97,-5.01 -0.05,-0.11 -1.77,-0.86 -8.2,-1.92 -4.26,0.07 -1.02,-0.29 -8.36,-1.18 -9.77,-0.29 -6.61,0.43 -0.02,-0.12 -0.24,0.28 -1.87,-0.07 0,0 0,-1.84 0,0 -1.54,-0.15 0.13,-11.38 -1.04,-3.86 0,0 -0.12,-0.01 0,0 -0.77,-2.79 -1.41,-3.85 -1.67,-2.97 -3.21,-5.05 -1.05,-17.58 -0.24,-6.82 0,0 0,-3.04 0,0 1.68,0.01 1.67,-0.17 0.36,-0.06 0.16,-0.09 0.74,-0.09 0.05,-0.06 1.67,-0.41 0.97,-0.36 0.38,-0.22 0.22,-0.06 0.05,0.06 0.3,-0.22 0.5,-0.1 0.04,-0.09 1.01,-0.54 0.26,-0.22 1.02,-0.6 0.62,-0.26 0.81,-0.46 0.81,-0.54 0.25,-0.23 0.16,-0.06 0.26,0.55 -0.05,0.1 -0.15,0.03 -0.16,-0.13 -0.14,0 -0.39,0.17 -1.14,0.68 -0.71,0.25 -0.15,0.13 -0.52,0.19 -1,0.68 -0.5,0.2 -0.13,0.16 -0.2,0.06 -0.15,0.15 -0.3,0.04 -0.15,0.17 -0.13,-0.04 -0.11,0.22 -0.06,-0.06 -0.24,0.03 -0.04,0.09 -0.15,0.07 -0.14,-0.03 -0.16,0.04 -0.15,0.06 -0.06,0.1 -0.26,0.16 -0.1,-0.04 -0.13,0.04 -0.24,0.2 -0.25,-0.04 -0.28,0.09 -0.04,0.07 -0.4,0 -0.24,0.13 -0.37,0 -0.15,0.12 -1,0.1 -0.46,0.25 -0.05,-0.06 -0.19,0.01 -0.04,0.06 -0.16,-0.03 -0.2,0.19 -0.2,0.06 0,0.06 0.24,0.01 0.05,0.07 0.22,0.06 0.24,-0.1 -0.09,-0.15 0.08,-0.16 0.14,0.13 0.11,0.01 0.31,-0.06 0.35,0.04 0.1,-0.12 0.47,0.07 0.05,0.07 -0.1,0.25 0.05,0.39 -0.44,0.01 -0.3,0.19 0.04,0.07 0.31,0.03 0.14,0.07 0.4,0 0.11,-0.15 0.51,-0.03 0.4,-0.38 0.06,-0.16 0.25,-0.17 0.29,0.01 0.51,0.26 0.79,-0.06 0.31,-0.13 0.36,-0.45 0.08,-0.01 0.55,-0.57 0.13,-0.1 0.17,-0.13 0.54,-0.15 0.29,-0.29 0.17,-0.03 0.06,-0.1 0.44,-0.01 0.11,-0.1 0.16,-0.01 0.09,-0.2 0.14,0.1 0.31,-0.35 0.16,0.01 0.1,0.15 0.22,-0.06 0.29,0.06 0.05,0.07 0.15,-0.07 0.14,-0.17 0.36,0.17 0.26,0.01 0.03,0.06 0.21,-0.01 0.02,-0.1 0.19,0.09 0.21,-0.12 0.17,0.09 0.14,-0.01 -0.04,0.13 0.12,0.07 0.06,-0.12 0.2,-0.13 -0.04,-0.35 0.04,-0.1 -0.03,-0.06 -0.11,-0.01 -0.04,0.09 -0.22,0.03 -0.05,0.12 -0.09,-0.07 0.05,-0.1 -0.16,0.01 -0.09,0.09 -0.1,0 0.01,0.16 -0.07,-0.04 0.06,-0.28 0.36,-0.26 0.17,0 0.38,0.26 0.4,0 -0.04,0.06 0.06,0.06 0.31,0 0.3,0.28 0.19,0.03 0.05,0.17 0.15,0.03 -0.06,0.09 0.07,0.06 0.2,0.01 0.16,-0.19 0.19,0.01 0.06,0.15 -0.1,0.06 -0.01,0.13 0.14,0.06 0.09,0.22 0.14,0.04 0.03,0.06 -0.08,0.04 0.09,0.1 -0.15,0 -0.15,-0.16 -0.05,-0.15 0.06,-0.04 -0.03,-0.1 -0.6,-0.03 -0.04,0.04 0.1,0.1 0.24,0.06 -0.08,0.04 0.05,0.06 -0.17,0.03 -0.11,0.1 0.17,0.06 0.02,0.16 0.17,0.09 -0.06,0.09 0.07,0.12 -0.14,0.09 -0.29,0.01 -0.11,0.12 0.2,-0.03 0.16,0.2 0.46,0.1 0.15,0.13 0.91,0 0.36,-0.46 0.27,-0.09 0.16,-0.19 0,-0.12 -0.39,-0.25 -0.1,0 -0.06,0.12 -0.2,0.06 -0.04,-0.19 0.14,-0.35 -0.01,-0.13 0.22,-0.12 0.11,0.13 0.16,-0.13 0.21,-0.04 0.1,-0.26 0.06,-0.03 0.69,0.14 0.36,-0.22 -0.07,-0.29 -0.25,0.1 -0.08,-0.26 0.21,-0.42 0.02,-0.17 0.11,-0.06 0.22,0.03 0.15,-0.12 -0.03,-0.09 0.06,0.01 0.06,-0.19 -0.06,-0.16 -0.1,0.07 -0.08,-0.1 -0.11,-0.01 -0.3,0.13 -0.09,-0.03 -0.21,0.15 -0.49,0.01 -0.04,0.17 -0.21,0.06 -0.06,0.1 0.06,0.12 -0.11,0.12 -0.04,0.22 0.15,0.01 0.04,0.09 -0.06,0.07 -0.1,-0.03 0.07,0.19 -0.19,0.09 0.11,0.13 0.05,0.07 -0.01,0.13 -0.47,-0.32 -0.19,-0.04 -0.52,0.09 -0.79,-0.09 0,0.1 -0.29,0.09 -0.05,0.09 -0.17,-0.16 -0.21,-0.01 0.01,-0.25 -0.06,-0.09 -0.24,0.07 -0.19,-0.12 0.01,-0.1 0.15,-0.09 0.59,0.06 0.72,-0.15 0.49,-0.46 0.04,-0.13 0.09,0 0.1,-0.1 0.36,-0.78 0.66,-0.97 0.23,-0.16 0.14,0 0.4,-0.35 0.31,0.04 0.26,-0.09 2.27,-1.41 0.24,-0.09 0.1,0.2 0.19,-0.03 -0.03,0.12 -0.16,-0.01 -0.14,-0.15 -0.05,0.06 -0.17,0 0.05,0.1 0.2,0 -0.01,0.04 -0.24,0.06 -0.1,-0.1 -0.09,0 0.02,0.09 -0.15,0.06 -0.04,0.13 -0.08,0.01 -0.01,-0.09 -0.09,0.01 0.01,0.13 0.54,0.15 0.2,0.19 0.02,0.15 -0.11,0.04 0.14,0.14 0.05,0.18 0.49,0.39 0,0.3 0.17,0.15 0.01,0.29 0.11,0.26 0.69,0.22 0.1,0.16 0.02,0.22 0.44,0.64 -0.42,-0.49 -0.15,-0.3 -0.2,-0.13 -0.31,0.15 -0.17,-0.2 -0.47,0 -0.09,-0.15 0.09,-0.22 -0.11,-0.22 -0.16,0.03 0.06,0.33 -0.2,0.04 -0.27,-0.04 0.01,0.17 0.09,0.15 0,0.16 -0.09,0.13 0.22,0.06 0.05,0.13 0.1,0.04 -0.1,0.06 -0.03,0.13 0.2,0.03 0.06,0.22 0.25,0.12 0.08,0.19 0.16,0.01 0.21,-0.1 0.17,0.06 0,0.04 -0.21,0.01 -0.15,0.19 -0.16,0 -0.07,-0.2 -0.16,-0.04 -0.19,0.26 0.21,0.04 0.01,0.42 0.1,-0.03 0.38,0.28 0.32,0.06 0.4,0.26 0.17,0 0.34,-0.13 0.17,0.06 -0.01,0.09 -0.05,-0.06 -0.38,0.06 -0.09,0.2 -0.17,-0.04 -0.13,0.1 0.11,0.13 -0.01,0.22 0.22,0.2 -0.02,0.07 -0.19,0.01 -0.1,0.15 0.25,0.01 0.04,0.1 -0.14,0.26 -0.05,-0.1 -0.25,0.01 -0.01,0.29 0.11,-0.15 0.06,0.12 -0.15,0.15 -0.05,0.15 0.05,0.04 0.49,-0.09 0.04,0.1 0.14,-0.12 0.35,-0.04 0.12,-0.12 0.15,0.07 0.34,-0.09 0.33,-0.14 0.36,-0.32 0.21,-0.09 0.03,-0.45 0.14,-0.1 0.16,0 0.67,-0.23 0.29,0.1 0.19,0 0.26,-0.04 0.14,-0.06 0.52,-0.78 0.25,-0.01 0.17,0.19 -0.32,-0.04 -0.14,0.12 0.04,0.12 -0.1,0.01 0.13,0.16 0.2,0.07 0.2,-0.03 0.02,-0.17 0.09,-0.1 0.24,-0.07 0.12,0.01 -0.01,0.06 0.09,0.03 0.32,-0.16 0.13,-0.19 0.29,-0.17 0.27,0.04 -0.04,0.15 -0.09,0 -0.13,0.12 0.09,0 0,0.06 0.17,0.09 0,-0.19 0.36,0.04 0.08,-0.06 0.06,-0.28 -0.17,0.04 -0.07,-0.09 0.09,-0.19 0.49,0 0.13,0.1 0.15,0 0.01,-0.19 0.2,-0.09 -0.25,-0.1 -0.13,0.03 -0.24,-0.07 -0.05,0.13 -0.4,0.03 -0.34,0.28 -0.55,0.13 0,0.09 -0.24,0.09 -0.1,0.12 -0.16,0.03 0.06,0.09 -0.26,0.01 -0.1,-0.07 -0.07,0.12 0,-0.16 0.15,0.01 0.03,-0.09 0.36,-0.22 0.25,0.01 0.02,-0.1 0.35,-0.07 0.01,-0.07 0.15,-0.03 0.15,-0.13 0.19,-0.01 0.3,-0.15 0.13,-0.12 0.01,-0.13 0.21,-0.1 0.47,-0.06 0.47,0.09 0.66,-0.15 0.51,0.03 0.51,-0.16 0.13,-0.15 0,-0.12 0.09,-0.01 0.01,-0.15 -0.13,-0.75 0.45,-0.42 0.26,-0.55 -0.2,-0.32 0.01,-0.13 0.2,-0.06 0.21,0.07 0.11,-0.09 0.27,0.06 0.1,-0.09 0,-0.06 -0.27,-0.03 -1.19,-0.61 -0.13,-0.16 -0.42,-0.12 -0.1,0.03 -0.06,-0.09 -0.35,-0.12 -0.9,-0.55 -0.81,-0.12 -0.05,-0.06 -0.84,-0.09 -0.09,0 0.01,0.12 -0.19,0.04 -0.17,-0.09 -0.06,-0.13 -0.09,0 -0.04,0.07 -0.1,-0.09 -0.05,0.03 -0.15,-0.17 0.19,-0.36 0.08,0.16 0.3,0.09 0.46,0.28 1.15,0.15 1.02,0.3 0.34,0.03 0.42,0.19 0.3,0.03 0.49,0.16 1.11,0.46 1.07,0.6 0.15,0.19 0.8,0.42 -0.2,0.13 -0.09,-0.1 0.04,-0.09 -0.12,-0.09 -0.49,-0.22 -0.07,0.06 -0.03,0.13 0.4,-0.03 0.04,0.07 -0.09,0.06 0.17,0.04 0.06,0.15 -0.04,0.06 -0.15,0 -0.01,0.06 0.14,0.04 0.16,-0.1 0.16,0.12 0.21,0.25 -0.01,0.12 -0.13,0.09 0.22,-0.04 0.17,0.06 0,0.23 0.24,0.22 0.49,0.17 0.01,-0.09 -0.21,-0.1 -0.13,-0.26 0.04,-0.06 0.14,0.01 0.01,-0.06 -0.11,0 -0.17,-0.12 0.14,-0.06 0.08,0.09 0.11,-0.01 0.01,0.22 0.07,0 0.16,0.23 0.05,0.2 0.3,0.06 0.29,0.2 0.06,-0.03 -0.62,-0.6 0.14,-0.01 0.17,0.26 0.21,0.1 0.38,0.35 0.22,0.01 0.56,0.2 1.27,0.23 1.37,0.09 1.69,0 2.38,-0.15 0.34,-0.09 0.61,0.01 0.11,-0.07 0.75,-0.09 0.77,-0.19 0.25,0.01 0.08,-0.09 1.6,-0.36 0.2,-0.12 0.3,-0.03 1.87,-0.64 0.22,-0.01 0.03,-0.06 0.25,0.03 0.26,-0.42 0.05,0 -0.05,0.16 0.25,0.1 1.09,-0.35 0.39,-0.09 0.74,-0.2 0.81,-0.36 0.69,-0.19 0.13,-0.12 1.58,-0.61 0.11,-0.13 0.16,-0.01 0.08,-0.09 0.51,-0.22 0.37,-0.04 0.51,-0.22 0.15,0.01 0.05,-0.15 0.79,-0.33 1.83,-0.96 2.15,-1.25 1.54,-1 1.4,-0.99 0.65,-0.6 0.34,-0.19 1.6,-1.47 1.85,5.89 z"
                                title="NorthSinai"
                                id="NorthSinai"
                                onClick={() => setActivatedGov(old => old === "North Sinai" ? "" : "North Sinai")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "Suez" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("Suez")}
                                d="m 323.30971,139.6418 0.78,-14.24 2.19,-25.47 0.04,-4.35 -1.28,-8.59 -0.65,-4.88 -1.23,-4.26 0,0 -0.12,-2.77 0,0 1.91,-0.18 18.62,-0.11 2.64,0.81 6.14,0.43 1.73,-1.41 4.61,-0.52 0,0 5.85,0.28 0,0 1.05,3.86 -0.13,11.39 1.54,0.14 0,0 0,2.66 0,0 -2.57,0.59 -6.93,5.2 0,0 -0.24,-0.34 -0.15,-0.1 -0.12,-0.46 -0.13,-0.22 -0.15,-0.01 -0.05,-0.19 -0.4,-0.37 -0.43,-0.04 -0.13,-0.12 0.1,-0.15 0.68,-0.62 -0.01,-0.08 0.27,-0.4 -0.12,-0.36 0.18,-0.28 0.06,-0.31 0,-0.19 -0.09,-0.17 -0.22,-0.18 -0.13,0.04 -0.3,-0.47 -0.52,-0.56 -0.51,-0.3 -0.13,0.08 -0.13,-0.57 -0.26,-0.33 -0.37,-0.14 -0.05,0.05 0.05,0.26 -0.25,0.06 0.05,0.08 -0.05,0.08 -0.23,-0.46 -0.14,0.01 -0.1,-0.07 0.07,-0.16 0.25,-0.15 -0.31,-0.13 0.21,-0.26 -0.03,-0.19 -0.18,0.06 -0.06,-0.1 -0.01,0.17 -0.09,0 0,-0.14 0.07,-0.09 0.05,-0.04 0,-0.1 -0.1,0.06 -0.06,-0.13 0.38,-0.25 0.16,-0.2 -0.11,-0.26 -0.29,-0.31 -0.1,-0.06 0,0.19 -0.31,0.04 -0.23,0.13 -0.43,0.03 0,0.16 -0.07,0.04 0.33,0.5 -0.16,-0.06 -0.2,-0.4 -0.19,-0.2 -0.1,-0.06 -0.29,0.03 0.19,7.82 -1.22,1.39 -1.92,1.4 -1.4,2.44 -0.35,3.14 -0.7,3.67 0.11,3.01 0.62,0.29 0.18,0.18 0.29,0.16 0.13,0.17 0.09,0.01 0.08,0.13 0.56,0.19 0.18,0.28 0.12,0.43 0.37,0.19 0.24,0.31 0.3,0.16 0.11,0.1 0.05,0.15 0.12,0.06 -0.05,0.17 0.09,0.07 0.08,0.23 0.1,0.07 0.17,-0.04 0.09,0.13 0.25,0.01 0.31,0.2 0.01,0.34 -0.06,0.13 0.28,0.37 0.1,-0.01 0.31,0.13 0.06,0.2 0.55,0.2 0.17,0.25 0.44,0.27 0.08,0.19 0.22,0.06 0.13,0.11 0.06,0.16 0.3,0.23 0.02,0.08 0.25,0.06 0.13,0.33 0.26,0.22 -0.11,0.19 0.05,0.2 0.18,0.1 0.14,0.04 0.08,0.43 0.14,0.27 0.34,0.24 0.09,0.19 -0.05,0.25 0.15,0.26 0.24,0.92 -0.05,0.2 0.07,0.19 -0.05,0.1 0.04,0.18 0.21,0.38 0.09,0 0.07,0.11 -0.03,0.11 -0.14,0.05 -0.05,0.08 0.04,0.44 0.47,0.34 -0.01,0.13 0.1,0.09 0.01,0.17 -0.11,0.03 -0.02,0.28 0.07,0.14 0.21,0.13 0.09,0.13 0.08,0.03 0.03,0.31 0.19,0.26 -0.08,0.21 -0.15,0.03 0.1,0.14 -0.04,0.21 -0.13,0.23 0.17,0.19 -0.07,0.13 0.1,0.04 0,0.17 0.16,0.36 -0.09,0.04 -0.14,-0.19 -0.01,0.17 0.03,0.07 0.16,0.03 0.26,0.26 0.06,0.3 0.13,0.23 -0.08,0.34 0.1,0 0.04,0.15 0.2,0.03 0,0.1 -0.01,0.09 0.02,0.14 -0.11,0.08 0.03,0.2 0.15,0.19 -0.09,0.11 0.04,0.19 -0.07,0.1 0.12,0.15 -0.02,0.23 0.12,0.1 -0.08,0.13 0,0.11 0.09,0.1 -0.01,0.41 0.13,0.03 0.04,0.1 0,0 -5.37,0.19 -3.94,2.34 -4.28,1.17 -8.03,4.94 -6.63,0.1 -5.16,0.98 0,0 0,0 0,0 z"
                                title="Suez"
                                id="Suez"
                                onClick={() => setActivatedGov(old => old === "Suez" ? "" : "Suez")}
                            />
                            <path
                                className={`mapsvg-path ${ActivatedGov === "New Valley" ? "Active" : ""}`}
                                onMouseEnter={() => setCurGov("New Valley")}
                                d="m 179.63971,205.9718 90.13,0.18 0.09,1.95 0,0 -1.04,0.1 -0.09,2.24 0.78,0.78 0.17,1.94 1.03,0.47 0.45,2.55 0.95,2.04 1.39,1.85 0.52,2.14 1.13,1.65 1.39,0.78 3.94,3.85 2.11,1.88 0.99,0.53 2.16,0.24 1.65,0.39 2.69,1.55 1.71,2.81 1.8,3.71 1.84,4.29 2.24,3.71 0,0 0.52,1.83 2.52,3.26 3,3.46 2.51,0.47 2.01,1.53 1.09,1.87 2.13,3.05 1.95,2.93 2.21,2.84 0.14,0.27 1.07,1.24 2.32,3.47 2.87,3.76 1.44,1.59 0.9,0.38 1.62,2.35 0.81,0.99 0,0 2.41,2.93 0,0 4.86,4.24 1.6,0.63 4.82,-0.13 1.43,-0.44 2.07,-0.38 1.84,-0.13 1.89,-0.64 1.15,-0.7 4.19,-1.71 1.9,-1.4 2.58,-1.02 2.58,0.13 0.92,0.76 1.22,2.27 0.25,2.26 -1.33,1.97 -1.55,2.73 -0.51,1.58 0,2.67 -0.69,1.52 -1.67,1.97 -2.64,2.47 -2.64,1.14 -1.78,1.83 -0.92,2.03 -0.11,2.34 0.64,1.08 1.15,2.49 0.15,3.12 0.77,1.52 -0.19,1.55 0.42,2.99 1.22,3.2 1.26,0.97 2.46,2.19 2.44,1.2 0,0 3.49,1.62 2.68,2.52 1.6,2.01 0.39,1.85 -0.03,2.6 0.06,2.17 1.17,3.56 0.56,2.19 1.8,3.48 -0.56,3.32 0,2.88 -0.66,3.49 -0.75,3.48 -0.02,3.42 -0.59,4.2 0,2.96 -0.39,6.45 -3.74,3.91 -1.84,0.92 -1.28,0.49 -1.39,1.39 0.17,3.14 2.11,2.04 1.49,1.21 0.32,1.26 -2.12,1.72 -2.01,0.56 -2.19,0.91 -2.29,1.36 -1.56,1.02 -1.41,2.01 -1.71,5.93 -0.36,3.28 1.39,1.65 5.18,1.23 2.68,0.36 1.72,-0.39 2.07,-0.11 0.48,1.98 -0.3,0.96 -1.42,2.36 -1.69,2.53 -1.54,3.24 -1.32,2.27 -1.69,2.7 -1.25,2.8 -0.79,2.37 -1.23,2.18 -0.95,2.01 -1.7,3.32 -1.64,0.92 -1.5,-0.66 -1.94,-1.22 -2.57,-0.51 -2.59,-0.26 -0.98,-0.38 -5.49,1.62 -8.64,2.42 -2.26,0.74 -1.61,0.23 -2.05,-0.23 -2.77,0.02 -1.17,0.5 -1.47,1.74 -0.84,1.83 0.21,2.22 0,4.33 0.23,1.6 -0.48,1.58 -0.83,1.57 -1.92,2.16 -2.96,2.73 -4,-0.12 -3.01,0.91 -4.32,2.23 -0.78,2.75 1.51,2.22 2.67,-0.26 0,0 0.93,0.08 0.18,2.16 -0.41,0.9 -0.07,0.86 -1.24,3.47 -2.63,-0.06 -10.05,0.04 -2.64,-0.08 -6.38,0.09 -0.48,-0.07 -37.07,0.14 0,0.29 -5.51,-0.26 -9.48,-0.05 -15.69,0.06 -0.24,-0.08 -2.89,0.03 -21.58,-0.11 -4.12,0.05 -24.72,-0.04 -0.83,0.07 -2.04,0.02 -1.89,-0.09 -9.94,0.02 -1.54,-0.05 -4.01,0.08 -1.83,-0.06 -30.85,0.12 -18.589999,-0.09 -1.72,0.05 -0.87,-0.06 -4.52,0.07 -55.55,0.07 -6.26,0.25 0,-279.33 0,0 0.81,-0.01 0,0 106.099999,0.02 0,0 0.68,0 0,0 z"
                                title="NewValley"
                                id="NewValley"
                                onClick={() => setActivatedGov(old => old === "New Valley" ? "" : "New Valley")}
                            />
                        </svg>
                    </div>
                </div>
                <span className='CurrentArea'>
                    {curGov}
                </span>
                <span className='AreaInfo h-100 dfCsc gap-4'>
                    <ul className='IconBar gap-3 '>
                        {curIcons.map((icon, index) => (
                            <li key={index} className={`pointer ${icon[1] && "Active"}`} onClick={() => {
                                let newIcons = [...curIcons];
                                let stt = newIcons[index][1];
                                newIcons.forEach(icon => {
                                    icon[1] = false;
                                });
                                newIcons[index][1] = !stt;
                                setCurIcons(newIcons);
                                if (!stt) {
                                    Filter(index);
                                } else {
                                    Filter(-1);
                                }
                            }}>
                                <i className={icon[0]} aria-hidden="true" />
                            </li>

                        ))}
                    </ul>
                </span>
            </div>
            {
                report == "" ?
                    ActivatedGov == "" ?
                        <div className='RightArea bg-white w-25 dfCcc'>
                            <header className='dfcc w-100 fw-bolder fs-3 px-1'
                                style={{
                                    fontFamily: "monospace",
                                    height: "115px",
                                    marginTop: "9vh",
                                }}
                            >
                                Choose a Region
                            </header>
                            <select className='pointer px-3 py-2 mt-3 rounded-2 w-75'
                                style={{
                                    backgroundColor: "var(--main-color)",
                                    color: "var(--main-bg-color)",
                                }}
                                onChange={(e) => setActivatedGov(e.target.value)}
                            >
                                <option value="">Choose a Region</option>
                                {Object.keys(rawdata).map((gov, index) => (
                                    <option key={index} value={gov}>{gov}</option>
                                ))}
                            </select>
                            <p className='py-4 fw-bolder'>or</p>
                            <button className='Button py-2 mt-3 px-3 rounded-2'
                                style={{
                                    backgroundColor: "var(--main-color)",
                                    color: "var(--main-bg-color)",
                                }}
                                onClick={() => getRandomReport("")}
                            >
                                Get A Random Region
                            </button>
                        </div>
                        :
                        <div className='RightArea bg-white w-25 dfCsc justify-content-around'>
                            <header className='w-100 fw-bolder fs-1 dfCcc'
                                style={{
                                    fontFamily: "monospace",
                                    height: "115px",
                                    marginTop: "9vh",
                                }}

                            >
                                {ActivatedGov}
                                <hr className='w-75' />
                            </header>
                            <ul className='dfcc w-100 justify-content-start gap-3 px-5' style={{
                                flexWrap: "wrap",
                            }}>
                                {curIcons.map((icon, index) => (
                                    <li key={index} className={`dfCcc rounded-1 gap-3 stats ${icon[1] && "Active"}`} id={dataorder[index][1]}
                                    >
                                        <i className={icon[0]} aria-hidden="true" />
                                        {curData[index] + dataorder[index][0]}
                                    </li>
                                ))}
                            </ul>
                            <div className='w-100 dfcc justify-content-between px-4'>
                                <button className='Button Cancel py-2 px-3 rounded-2'
                                    style={{
                                        color: "black",
                                        backgroundColor: "var(--border-color)",
                                    }}
                                    onClick={() => { setActivatedGov(""); setReport(""); }}
                                >
                                    Cancel
                                </button>
                                <button className='Button py-2 px-3 rounded-2'
                                    style={{
                                        backgroundColor: "var(--main-color)",
                                        color: "var(--main-bg-color)",
                                    }}
                                    onClick={() => CreateReport(ActivatedGov)}
                                >
                                    Create Report
                                </button>
                            </div>
                        </div>
                    :
                    <div className='RightArea bg-white w-25 dfCsc justify-content-between'>
                        <header className='w-100 fw-bolder fs-1 dfCcc py-5'
                            style={{
                                fontFamily: "monospace",
                                height: "115px",
                                marginTop: "9vh",
                            }}

                        >
                            {report[0]}
                            <hr className='w-75 py-3' />
                        </header>
                        <span className='w-100 px-4 dfcc'>{report[1]}</span>

                        <ul className='px-4 dfCcc align-items-start gap-2 w-100' style={{
                            position: "relative",
                            top: "-10px",
                        }}>
                            {
                                report[2].map((info, index) => (
                                    <li className=' dfsc w-100 gap-3' key={index}>
                                        {info}
                                        <i className="fa fa-arrow-circle-up" aria-hidden="true"
                                            style={{
                                                color: "#2A7F62"
                                            }}
                                        />
                                    </li>
                                ))
                            }
                            {
                                report[3].map((info, index) => (
                                    <li className=' dfsc w-100 gap-3' key={index}>
                                        {info}
                                        <i className="fa fa-arrow-circle-down" aria-hidden="true"
                                            style={{
                                                color: "#CB4335"
                                            }}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='ButtonContainer w-100 dfcc justify-content-between align-items-end py-4 px-4'>
                            <button className='Button Cancel py-2 px-3 rounded-2'
                                style={{
                                    color: "black",
                                    backgroundColor: "var(--border-color)",
                                }}
                                onClick={() => { setActivatedGov(""); setReport(""); }}
                            >
                                Cancel
                            </button>
                            <button className='Button py-2 px-3 rounded-2'
                                style={{
                                    backgroundColor: "var(--main-color)",
                                    color: "var(--main-bg-color)",
                                }}
                                onClick={() => setReport("")}
                            >
                                See Stats
                            </button>
                        </div>
                    </div>
            }

        </div >
    )
}

export default MapPage