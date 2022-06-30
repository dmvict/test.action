const core = require( '@actions/core' );

try
{
  const matrix = core.getInput( 'matrix' );
  const matrixParsed = JSON.parse( matrix );
  const matrixKeys = Object.keys( matrixParsed );
  if( matrixKeys.length !== 1 && matrixKeys[ 0 ] !== 'os' )
  throw Error( 'Unexpected value of matrix context' );

  const matrix_os = core.getInput( 'matrix_os' );
  if( matrixParsed.os !== matrix_os )
  throw Error( 'Matrix context and matrix field `os` has different content' );
  if( matrix_os !== 'ubuntu-latest' )
  throw Error( 'Expected value `ubuntu-latest` in `matrix.os`' );
}
catch( error )
{
  core.setFailed( error.message );
}
