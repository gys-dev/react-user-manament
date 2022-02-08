const seeder = require('mongoose-seed');
require('dotenv').config();

const users = [
    {
        'model': 'Role',
        'documents': [
           {
            '_id': '6034c179c7f75d27640b3f06',
            'role': 'admin',
            'note': 'Người quản trị cao nhất'
           },
           {
            '_id': '6034c179c7f75d27640b3f07',
            'role': 'user',
            'note': 'User người dùng phổ thông'
           }
        ]
    },
    {
        'model': 'User',
        'documents': [
            {
                '_id': '603cabee4d06030968d62c43',
                'user_name': 'ducy23061999',
                'password': 'tranducy',
                'first_name': 'DucY',
                'last_name': 'Tran',
                'role_id': '6034c179c7f75d27640b3f06'
            },
            {
                '_id': '603cabee4d06030968d62c45',
                'user_name': 'hovanduong',
                'password': 'duong123',
                'first_name': 'Ho Van',
                'last_name': 'Duong',
                'role_id': '6034c179c7f75d27640b3f07'
            },
            {
                '_id': '603cac45b283082cdc86b4da',
                'user_name': 'hoangquangkhai',
                'password': 'khai1212',
                'first_name': 'Hoang Qua',
                'last_name': 'Khai',
                'role_id': '6034c179c7f75d27640b3f07'
            }
        ]
    }, 
]

const posts = [
    {
        'model': 'Category',
        'documents': [
            {
                '_id': '603dea1cf9a72105ec2518f8',
                'name': 'Công Nghệ Thông Tin',
            },
            {
                '_id': '603dea1cf9a72105ec2518f9',
                'name': 'Thủ thuật',
                'parrent_category': '603dea1cf9a72105ec2518f8'
            },
            {
                '_id': '603dea1cf9a72105ec2518fa',
                'name': 'Văn phòng',
                'parrent_category': '603dea1cf9a72105ec2518f8'
            },
            {
                '_id': '603dea1cf9a72105ec2518fb',
                'name': 'Ngôn Ngữ Lập Trình',
            },
            {
                '_id': '603dea1cf9a72105ec2518fc',
                'name': 'Java',
                'parrent_category': '603dea1cf9a72105ec2518fb'
            },
            {
                '_id': '603dea1cf9a72105ec2518fd',
                'name': 'Python',
                'parrent_category': '603dea1cf9a72105ec2518fb'
            },
        ]
    },
    {
        'model': 'Post',
        'documents': [
            {
                'title': 'Java là ngôn ngữ dài nhất thế giới',
                'body': 'Các nhà khoa học đã thống nhất ngôn ngữ java là ngôn ngữ dài nhất thế giới',
                'slug': 'java-la-ngon-ngu-dai-nhat-the-gioi',
                'update_date': Date.now(),
                'author': '603cabee4d06030968d62c43', // ducy23061999
                'category': '603dea1cf9a72105ec2518fc', // Java
                'thumbnail_image': 'https://cafedev.vn/wp-content/uploads/2019/12/cafedev_java13.jpg'
            },
            {
                'title': '30 phím tắc nhanh cho excel',
                'body': 'Hôm nay mình sẽ chỉ cho các bạn 30 phím tắt nhanh cho excel giúp bạn xử lí công việc nhẹ nhàng hơn',
                'slug': '30-phim-tac-nhanh-cho-excel',
                'update_date': Date.now(),
                'author': '603cabee4d06030968d62c43', // ducy23061999
                'category': '603dea1cf9a72105ec2518fa', // Văn phòng
                'thumbnail_image': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/excel-1598646848.jpg'
            },
            {
                'title': 'Lập trình web với django',
                'body': 'Django là một framework mạnh mẽ giúp bạn build một trang web một cách nhanh chóng',
                'slug': 'lap-trinh-web-voi-django',
                'update_date': Date.now(),
                'author': '603cabee4d06030968d62c45', // hovanduong
                'category': '603dea1cf9a72105ec2518fd', // Python
                'thumbnail_image': 'https://www.djangoproject.com/s/img/logos/django-logo-negative.png'
            }
        ]
    }
]

seeder.connect(process.env.DB_CONNECT_STRING, function() {
    seeder.loadModels([
        './models/user.js',
        './models/role.js',
        './models/post.js',
        './models/category.js'
    ]);
    seeder.clearModels(['User', 'Role', 'Category', 'Post'], function() {

        seeder.populateModels(users, () => {
            seeder.populateModels(posts, () => {
                seeder.disconnect()
            })
        })

    })
})