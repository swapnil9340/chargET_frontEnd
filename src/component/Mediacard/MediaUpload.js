import React, { useEffect} from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import RemoteSources from '@uppy/remote-sources'
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Cookies from 'js-cookie';
import ProgressBar from '@uppy/progress-bar';

const MediaUpload = () => {
    const cookieValue = Cookies.get('ChargeET_UserToken');
    const uppy = new Uppy({
        restrictions: { maxFileSize: 100000000, maxNumberOfFiles: 10, allowedFileTypes: ['image/*', 'video/*'] },
        autoProceed: false,
      });
      uppy.use(RemoteSources, {
        companionUrl: 'https://your-companion-url',
        sources: [ 'Dropbox', 'GoogleDrive' , 'Unsplash' ],
      });

      uppy.use(XHRUpload, {
        endpoint: 'https://mytx4uv5wqtobdr5ojx7qn3r5u0xaqli.lambda-url.us-east-1.on.aws/?type=media&action=upload', // Replace with your server endpoint
        fieldName: 'media_content',                      // Name of the field on the server
        formData: true,
        headers: { authorization: cookieValue }, // Example for adding headers (optional)
      })
      useEffect(() => {
        
        // return () => uppy.close();
      }, []);
          uppy.on('complete', (result) => {
        console.log('Upload successful:', result.successful);
      });
  return (
    <div>
          <Dashboard 
            uppy={uppy}
            // plugins={['XHRUpload']}
            proudlyDisplayPoweredByUppy={false}
            hideUploadButton={false}
            hideProgressAfterFinish={true}
        />
    </div>
  )
}

export default MediaUpload