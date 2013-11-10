/**
 * Created by schien on 10/11/2013.
 */
define(['backbone'
    , 'collections/todos'
    , 'models/todo'
    , 'views/todo'
], function (Backbone, Todos, Todo, TodoView) {
    'use strict';
    var AppView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click button#add': 'addItem'
        },
        initialize: function () {
            _.bindAll(this, 'render', 'addItem', 'appendItem'); // fixes loss of context for 'this' within methods
            this.collection = new Todos();

            this.collection.bind('add', this.appendItem); // collection event binder

            this.counter = 0;

            this.render(); // not all views are self-rendering. This one is.
        },
        render: function () {
            var self = this;
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<ul></ul>");
            _(this.collection.models).each(function(item){ // in case collection is not empty
                self.appendItem(item);
            }, this);
        },
        addItem: function(){
            this.counter++;
            var item = new Todo();
            item.set({
                name:  this.counter // modify item defaults
            });
            this.collection.add(item);
        },
        appendItem: function(item){
            var todoView = new TodoView({
                model: item
            });
            $('ul', this.el).append(todoView.render().el);
        }
    })

    return AppView;
})