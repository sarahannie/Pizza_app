import uniqid from 'uniqid';
import {uploads,  uploadFile} from '@/utils/cloudinary';



export async function POST(req) {
    const data = await req.formData();
    if (data.get('file')) {
      // upload the file
      const file = data.get('file');
        console.log('file',file)
      const ext = file.name.split('.').slice(-1)[0];
      const newFileName = uniqid() + '.' + ext;
   
      const chunks = [];
    
      for await (const chunk of file.stream()) {
        chunks.push((chunk));
      }
      const buffer = Buffer.concat(chunks);

      console.log("Buffer", buffer)
     
   
      const uploadResponse = await  uploadFile(buffer, newFileName);
      if (uploadResponse.statusCode === 404) {
        throw new Error('File not found');
       }
       console.log("uploadResponse", uploadResponse)
   
      const link = uploadResponse.url;
      return Response.json(link);
    }
    return Response.json(true);
   }


   