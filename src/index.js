const core = require( '@actions/core' );

try
{
  const job = core.getInput( 'inputs' );
  const parsed = JSON.parse( job );
  console.log( job );
  console.log( parsed );
}
catch( error )
{
  core.setFailed( error.message );
}
