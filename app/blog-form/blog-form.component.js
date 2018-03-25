'use strict';

angular.module('blogForm').component('blogForm', {
    templateUrl: 'blog-form/blog-form.template.html',
    controller: ['Blog', '$routeParams','$location',
        function BlogListController(Blog, $routeParams, $location) {
            this.blog = Blog.getBlog($routeParams.blogId);
            console.log(this.blog);
            if (!this.blog && $routeParams.blogId !== "create") {
                $location.url('/blogs');
            }
            this.saveBlog = function (blog) {
                Blog.saveBlog(blog);
                $location.url('/blogs');
            };
        }
    ]
});
