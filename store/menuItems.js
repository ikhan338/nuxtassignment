const menu = [
    {
        "id":"1",
        "icon":"el-icon-location",
        "title":"Home",
        "url":"",
        "submenu":true,
        "submenuitems":[
            {
                "id":"1-1",
                "title":"Dashboard",
                "submenu":false,
                "url":"/"
            },
            {
                "id":"1-2",
                "title":"Home One",
                "submenu":false,
                "url":"/homeOne"
            },
            {
                "id":"1-3",
                "title":"Home Two",
                "submenu":false,
                "url":"/homeTwo"
            }
            
        ]            
    },
    {
        "id":"2",
        "title":"Nav Two",
        "icon":"el-icon-setting",
        "submenu":false,
        "url":"/aboutOne",
        "submenuitems":[]
    },
    {
        "id":"3",
        "title":"Nav Three",
        "icon":"el-icon-menu",
        "submenu":false,
        "url":"/aboutTwo",
        "submenuitems":[]
    }
]

export default menu;