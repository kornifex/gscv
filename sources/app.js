/*global define*/

define( [

    'vendors/Backbone',
    'vendors/JQuery',

    'editor'

], function ( Backbone, $, editor ) {

    var Card = Backbone.Model.extend( {

        defaults : {
            radius : 10,
            name : "Maël Nison",
            job : "Frontend Developer",
        }

    } );

    var View = Backbone.View.extend( {

        initialize : function ( ) {
            this.model.on( 'change:radius', this.onRadiusChange, this );
            this.model.on( 'change:backgroundColor', this.onBackgroundColorChange, this );
            
            this.model.on( 'change:name', this.onNameChange, this );
            this.model.on( 'change:nameFont', this.onNameFontChange, this );
            this.model.on( 'change:nameFontSize', this.onNameFontSizeChange, this );
            this.model.on( 'change:nameFontColor', this.onNameFontColorChange, this );
            
            this.model.on( 'change:job', this.onJobChange, this );
            this.model.on( 'change:jobFont', this.onJobFontChange, this );
            this.model.on( 'change:jobFontSize', this.onJobFontSizeChange, this );
            this.model.on( 'change:jobFontColor', this.onJobFontColorChange, this );
            
        },

        render : function ( ) {
            this.onRadiusChange( );
        },

        onRadiusChange : function ( ) {
            this.$el.css( 'border-radius', this.model.get( 'radius' ) );
        },
        
        onBackgroundColorChange : function ( ) {
            var rgb = this.model.get( 'backgroundColor' );
            var rounded = {
                r: rgb.r * 255,
                g: rgb.g * 255,
                b: rgb.b * 255
            };
            var hex = '#' + ( 16777216 | rounded.b | ( rounded.g << 8 ) | ( rounded.r << 16 ) ).toString( 16 ).substr( 1 );
            
            this.$el.css( 'background', hex );
        },
        
        onNameChange : function ( ) {
            this.$el.find( '.name' ).text( this.model.get( 'name' ) );
        },
        
        onNameFontChange : function ( ) {
            this.$el.find( '.name' ).css( 'font-family', this.model.get( 'nameFont') );
        },
        
        onNameFontSizeChange : function ( ) {
            this.$el.find( '.name' ).css( 'font-size', this.model.get( 'nameFontSize' ) );
        },
        
        onNameFontColorChange : function ( ) {
            var rgb = this.model.get( 'nameFontColor' );
            var rounded = {
                r: rgb.r * 255,
                g: rgb.g * 255,
                b: rgb.b * 255
            };
            var hex = '#' + ( 16777216 | rounded.b | ( rounded.g << 8 ) | ( rounded.r << 16 ) ).toString( 16 ).substr( 1 );
            
            this.$el.find( '.name' ).css( 'color', hex );
        },
        
        onJobChange : function ( ) {
            this.$el.find( '.job' ).text( this.model.get( 'job' ) );
        },
        
        onJobFontChange : function ( ) {
            this.$el.find('.job').css( 'font-family', this.model.get( 'jobFont') );
        },
        
        onJobFontSizeChange : function ( ) {
            this.$el.find('.job').css( 'font-size', this.model.get( 'jobFontSize' ) );
        },
        
        onJobFontColorChange : function ( ) {
            var rgb = this.model.get( 'jobFontColor' );
            var rounded = {
                r: rgb.r * 255,
                g: rgb.g * 255,
                b: rgb.b * 255
            };
            var hex = '#' + ( 16777216 | rounded.b | ( rounded.g << 8 ) | ( rounded.r << 16 ) ).toString( 16 ).substr( 1 );
            
            this.$el.find( '.job' ).css( 'color', hex );
        }

    } );

    // --- --- --- --- --- --- --- --- ---

    var card = new Card( );
    var view = new View( { model : card, el : $( '.card' ) } );

    view.render( );

    // --- --- --- --- --- --- --- --- ---

    var appearance = editor.createWidget( 'Group', {
        label : 'Card Appearance'
    } );

    appearance.createWidget( 'Border radius', 'NumberedSlider', {
        model : card,
        name  : 'radius'
    } );
    
    appearance.createWidget( 'Background Color', 'Color', {
        model : card,
        name  : 'backgroundColor'
    } );
    
    // --- --- --- --- --- --- --- --- ---
    
    var infosGroup = editor.createWidget( 'Group', {
        label : 'Infos'
    } );
    
    var infosTabs = infosGroup.createWidget( 'Tabbed', {
        name : 'Tabs'
    } );
    
    var namePanel = infosTabs.createPanel( 'Name', {});
    
    namePanel.createWidget( 'Name', 'Text', {
        model : card,
        name : 'name'
    } );
    
    namePanel.createWidget( 'Font', 'Select', {
        model : card,
        options : ['Arial', 'Courier New', 'Helvetica', 'Impact', 'Verdana'],
        name  : 'nameFont'
    } );
    
    namePanel.createWidget( 'Font Size', 'NumberedSlider', {
        model : card,
        name  : 'nameFontSize',
        minimum : 10,
        maximum : 60,
        default: 25
    } );
    
    namePanel.createWidget( 'Font Color', 'Color', {
        model : card,
        name  : 'nameFontColor'
    } );
    
    var jobPanel = infosTabs.createPanel( 'Job', {});
    
    jobPanel.createWidget( 'Job', 'Text', {
        model : card,
        name : 'job'
    } );
    
    jobPanel.createWidget( 'Font', 'Select', {
        model : card,
        options : ['Arial', 'Courier New', 'Helvetica', 'Impact', 'Verdana'],
        name  : 'jobFont'
    } );
    
    jobPanel.createWidget( 'Font Size', 'NumberedSlider', {
        model : card,
        name  : 'jobFontSize',
        minimum : 10,
        maximum : 60,
        default: 25
    } );
    
    jobPanel.createWidget( 'Font Color', 'Color', {
        model : card,
        name  : 'jobFontColor'
    } );
    
    // --- --- --- --- --- --- --- --- ---
    
    
    

} );
