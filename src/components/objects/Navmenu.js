export const navMenu = [
    {
        head: '모나미 소개', to: '/about/ceo', height: "group-hover:h-[10rem]",
        lists: [
            { list: 'CEO 메시지', to: "/about/ceo" },
            { list: '회사소개', to: "/about/info" },
            { list: '찾아오시는길', to: "/about/directions" },
        ]
    },
    {
        head: '모나미 제품', to: '/search', height: "group-hover:h-[3.5rem]",
        lists: [
            { list: '제품 검색', to: "/search" },

        ]
    },
    {
        head: 'NEWS', to: '/news', height:  "group-hover:h-[3.5rem]",
        lists: [
            { list: 'NEWS', to: '/news' }
        ]
    },
    {
        head: '고객지원', to: '/inquity', height: "group-hover:h-[3.5rem]",
        lists: [
            { list: '문의하기', to: "/inquity" },
        ]
    }
]