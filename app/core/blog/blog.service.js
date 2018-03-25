'use strict';

const INIT_BLOGS = [
    {
        "id": 1,
        "author": "Lisp",
        "title": "Blog 1",
        "created": 1521914396090,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
        "id": 2,
        "author": "Kasp",
        "title": "Blog 2",
        "created": 1521924396090,
        "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": 3,
        "author": "Wasp",
        "title": "Blog 3",
        "created": 1521964396090,
        "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
    },
    {
        "id": 4,
        "author": "Gasp",
        "title": "Blog 4",
        "created": 1521984396090,
        "content": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt"
    },
    {
        "id": 5,
        "author": "Osp",
        "title": "Blog 5",
        "created": 1521915556090,
        "content": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },
    {
        "id": 6,
        "author": "Nisp",
        "title": "Blog 6",
        "created": 1521912326090,
        "content": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        "id": 7,
        "author": "Kisp",
        "title": "Blog 7",
        "created": 1521911116090,
        "content": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
    },
];

const PAGE_SIZE = 2;

angular.module('core.blog').factory('Blog',
    function () {
        let self = this;
        this.blogs = INIT_BLOGS;
        this.nextId = this.blogs.length + 1;
        this.blogsCount = this.blogs.length;
        this.currentPage = 1;
        return {
            getBlogs: function (pageNum = 1) {
                return {
                    'blogs': getPagedBlogs(self.blogs, pageNum),
                    'blogsCount': self.blogsCount,
                    'blogsPerPage': PAGE_SIZE,
                    'currentPage': self.currentPage
                }

            },
            getBlog: function (id) {
                return self.blogs.find(blog => blog.id == id);
            },
            saveBlog: function (blog) {
                if (!blog.id) {
                    blog.id = self.nextId++;
                    self.blogs = [...self.blogs, blog];
                    self.blogsCount = self.blogs.length;
                } else {
                    self.blogs = self.blogs.map(existingBlog => existingBlog.id == blog.id ?
                        Object.assign(existingBlog, blog) : existingBlog);
                }
            }
        }
    }
);

function getPagedBlogs(blogs, pageNum) {
    if (blogs.length < pageNum * PAGE_SIZE - PAGE_SIZE) {
        return [];
    }
    return blogs.slice((pageNum - 1) * PAGE_SIZE, pageNum * PAGE_SIZE);
}

