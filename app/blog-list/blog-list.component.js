'use strict';

angular.module('blogList').component('blogList', {
    templateUrl: 'blog-list/blog-list.template.html',
    controller: ['Blog', '$location',
        function BlogListController(Blog, $location) {
            let self = this;

            ({
                blogs: this.blogs,
                blogsCount: this.blogsCount,
                blogsPerPage: this.blogsPerPage,
                currentPage: this.currentPage
            } = Blog.getBlogs());

            this.setPage = function (pageNo) {
                self.currentPage = pageNo;
            };

            this.pageChanged = function () {
                ({blogs: self.blogs} = Blog.getBlogs(self.currentPage));
            };
            this.orderProp = 'description';
            this.restartBlog = function (id) {
                self.blogs = Blog.restartBlog(id);
            };
            this.completeBlog = function (id) {
                self.blogs = Blog.completeBlog(id);
            };
            this.addBlog = function () {
                $location.url('/blogs/create');
            }
        }
    ]
});