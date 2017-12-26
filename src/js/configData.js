/**
 * Created by cdu on 17/11/19.
 */

import subImage1 from './../images/subImage_1.png';
import subImage2 from './../images/subImage_2.png';
import pro1 from './../images/pro_1.png';
import pro2 from './../images/pro_2.png';
import pro3 from './../images/pro_3.png';
import pro4 from './../images/pro_4.png';
// import mp3 from './../images/index.mp3';
// import logo from './../images/logo.png';

// 顶级导航栏按钮
const navLinks = [
    {
        text: '吹风机',
        disabled: false,
        href: '/',
        // childrenItems: [
        //     {
        //         title: '标题3',
        //         subTitle: '副标题3',
        //         link: subImage1,
        //         href: 'https://www.baidu.com'

        //     },
        //     {
        //         title: '标题4',
        //         subTitle: '副标题4',
        //         link: subImage2,
        //         href: 'https://www.taobo.com'

        //     }
        // ]
    },
    {
        text: '关于莜样',
        // disabled: true,
        href: '/about'
    },
    {
        text: '联系我们',
        // disabled: true,
        href: '/contact'
    }
];

// 首页的一些产品信息
const indexProList = [
    {
        title: '标题',
        subTitle: '副标题',
        link: pro1,
        href: 'https://www.baidu.com'

    },
    {
        title: '标题2',
        subTitle: '副标题2',
        link: pro2,
        href: 'https://www.taobao.com'

    },
    {
        title: '标题3',
        subTitle: '副标题3',
        link: pro3,
        href: 'https://www.baidu.com'

    },
    {
        title: '标题4',
        subTitle: '副标题4',
        link: pro4,
        href: 'about://blank'

    }

];

// exports.navLinks = navLinks;
// exports.indexProList = indexProList;
export {
    navLinks,
    indexProList
};
// export default {}
// export {
//     navLinks,
//     indexProList
// }
