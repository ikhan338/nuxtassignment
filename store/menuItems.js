const menu = [
    {
        "id":1,
        "icon":"el-icon-location",
        "title":"Nav One",
        "submenu":true,
        "submenuitems":[
            {
                "id":1.1,
                "title":"sub One",
                "submenu":false,
                "url":"google.com"
            },
            {
                "id":1.2,
                "title":"sub 2",
                "submenu":false,
                "url":"google.com"
            },
            {
                "id":1.3,
                "title":"sub 3",
                "submenu":false,
                "url":"google.com",
                "submenuitems":[
                    {
                        "id":1.2,
                        "title":"sub sub One",
                        "submenu":false,
                        "url":"google.com"
                    },
                    {
                        "id":1.3,
                        "title":"sub sub 2",
                        "submenu":false,
                        "url":"google.com"
                    }
                ]
            }
            
        ]            
    },
    {
        "id":2,
        "title":"Nav Two",
        "icon":"el-icon-setting",
        "submenu":false,
        "url":"google.com",
        "submenuitems":[]
    },
    {
        "id":3,
        "title":"Nav Three",
        "icon":"el-icon-menu",
        "submenu":false,
        "submenuitems":[]
    }
]

export default menu;