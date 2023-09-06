import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export const carouselData = [
    {
        title: 'Web Development',
        description:
            " Need a website that wows your audience and performs flawlessly? Look no further! I excel in building dynamic and responsive websites that not only catch the eye but also provide a seamless user experience. Whether you're looking for a simple portfolio site, an e-commerce platform, or a complex web application, I've got you covered. With my expertise in various programming languages, frameworks, and CMS platforms, your website will be fast, secure, and search engine optimized.",
        // image: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
        image: <WebIcon fontSize='large' />,
    },
    {
        title: 'Mobile Development',
        description:
            "In a mobile-centric world, having a captivating and high-performing mobile app is crucial. That's where I come in! I specialize in developing native and cross-platform mobile applications for iOS and Android devices. Using the latest technologies and industry best practices, I create mobile apps that are not only visually appealing but also deliver a smooth user experience. Whether you have an idea for a productivity app, a social networking platform, or an on-demand service, I'll turn your vision into a feature-rich and user-friendly reality.",
        image: <PhoneAndroidIcon fontSize='medium' />,
    },
    {
        title: 'UX Design',
        description:
            'User experience (UX) is the key to success in the digital realm. I understand the importance of creating interfaces that are intuitive, engaging, and visually stunning. By employing a strategic approach and leveraging user-centered design principles, I craft interfaces that users will love. From user research and wireframing to interactive prototypes, I ensure that every step of the design process is carefully executed.',
        image: <DesignServicesIcon fontSize='large' />,
    },
];
