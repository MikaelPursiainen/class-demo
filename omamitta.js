
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program prints conversion tables." 
                   + "\n Type a letter to select a conversion table "
                   + "\n\n m  Miles to kilometers"
                   + "\n k  Kilometers to miles" 
                   + "\n Type in ur letter: " ) ;
process.stdin.on( "data", function( input_from_user )
{
    var user_selection = String( input_from_user ).charAt( 0 ) ;
    if (  user_selection == "M" )
        {
        process.stdout.write( "\n\n Yritä nyt edes seurata ohjeita..." ) ;
        process.exit () ; 
        }
    if ( user_selection == "m" ) 
    {
        process.stdout.write("\n      Miles     Kilometers  " ) ;
            var distance_in_miles = 10 ;
            var distance_in_kilometers =  1.6093 * distance_in_miles ;
            while ( distance_in_miles <= 110 )
            {
            distance_in_kilometers =  1.6093 * distance_in_miles ;
            tools.printf( "\n %10.2f %10.2f",
            distance_in_miles, distance_in_kilometers ) ;
            distance_in_miles = distance_in_miles + 10 ;
        } 
    }
    if (  user_selection == "K" )
        {
        process.stdout.write( "\n\n Yritä nyt edes seurata ohjeita..." ) ;
        process.exit () ; 
        }
    if (  user_selection == "k" )
    {
        process.stdout.write( "\n\n      Kilometers    Miles" ) ;
            var distance_in_kilometers = 10 ;
            var distance_in_miles =  distance_in_kilometers / 1.6093 ;
            while ( distance_in_kilometers <= 110 )
            {
            distance_in_miles =  distance_in_kilometers / 1.6093 ;
            tools.printf( "\n %10.2f %10.2f",
            distance_in_kilometers, distance_in_miles ) ;
            distance_in_kilometers = distance_in_kilometers + 10 ;
            } 
    }

   process.exit() ;
} )
