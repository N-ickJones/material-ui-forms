import Head from 'next/head'
import { TextField } from '../../lib/esm'
import * as fs from 'fs';
import * as path from 'path';
import YAML from 'yaml'

export default function Home() {
  const filePath = path.join(__filename, '../forms/form1.yaml');
  const file = fs.readFileSync(filePath, 'utf8');
  var contents = YAML.parse(file);
  console.log(contents);

  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Demo app for yaml-form-builder npm package." />
      </Head>

      <TextField defaultValue={'hello world'} />
    </div>
  )
}
