'use strict';

describe('Blog', function() {
    var Blog;
    const pageSize = 2;

    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('core.blog'));

    beforeEach(inject(function(_Blog_) {
        Blog = _Blog_;
    }));


    it('should get default first page of blogs', function() {
        let blogsObject = Blog.getBlogs();
        expect(blogsObject.blogs.length).toEqual(pageSize);
        expect(blogsObject.blogs[0].id).toEqual(1);
        expect(blogsObject.blogs[1].id).toEqual(2);
        expect(blogsObject.currentPage).toEqual(1);
    });

    it('should get requested page of blogs', function() {
        let blogsObject = Blog.getBlogs(2);
        expect(blogsObject.blogs[0].id).toEqual(3);
        expect(blogsObject.blogs[1].id).toEqual(4);
        expect(blogsObject.currentPage).toEqual(2);
    });

    it('should return empty array of blogs for page too big', function() {
        let blogsObject = Blog.getBlogs(10);
        expect(blogsObject.blogs.length).toEqual(0);
    });

    it('should return 1 element for last page when there is even number of blogs', function() {
        let blogsObject = Blog.getBlogs(4);
        expect(blogsObject.blogs.length).toEqual(1);
    });


    it('should find blog by id', function() {
        let blog = Blog.getBlog(1);
        expect(blog.id).toEqual(1);
    });

    it('should not find blog by unknown id', function() {
        let blog = Blog.getBlog(-1);
        expect(blog).toBeUndefined();
    });

});
