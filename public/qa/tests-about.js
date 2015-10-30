/**
 * Created by Administrator on 2015/10/30.
 */
suite('"About" Page Tests', function(){
    test('page should contain link to contact page', function(){
        assert($('a[href="/contact"]').length);
    });
});
