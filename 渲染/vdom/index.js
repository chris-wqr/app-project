const vdom = {
    type: 'ul',
    props: {
        className: 'list'
    },
    children: [
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    background: 'blue',
                    color: 'red'
                },
                onClick: function() {
                    alert('提示信息');
                }
            },
            children: [
                '点我'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item'
            },
            children: [
                '填充内容b'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item'
            },
            children: [
                '填充内容c'
            ]
        }
    ]
};

render(vdom, document.getElementById('root'));