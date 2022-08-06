// import type { ActionFunction } from '@remix-run/node';
// import { redirect } from '@remix-run/node';
// import { Form, useActionData } from "@remix-run/react";
// import { Link } from '@remix-run/react';

// // type Props = {};

// export const action: ActionFunction = async ({ request }: { request: Request }) => {
//   const form = await request.formData();
//   console.log(form);
//   return redirect('/posts');
// };

// const NewPost = (props: Props) => {
//   return (
//     <>
//       <div className="page-header">
//         <h1>New Post</h1>
//         <Link to="/posts" className="btn">
//           Back
//         </Link>
//       </div>
//       <div className="page-content">
//         <form method="POST">
//           <div className="form-control">
//             <label htmlFor="title">Title</label>
//             <input type="text" name="title" id="title" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="body">Post Body</label>
//             <textarea name="body" id="body" />
//           </div>
//           <button type="submit" className="btn btn-block">
//             Add Post
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default NewPost;





import type { ActionFunction } from "@remix-run/node"
import { Link } from '@remix-run/react';
import { useActionData } from "@remix-run/react"
import { redirect } from "@remix-run/node"


export const action:ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const title = form.get('title');
  const body = form.get('body');

  const fields = {title,body};
  console.log(fields);

  //TODO Submit to database

  return redirect(`/posts`)
}

function NewPost() {
  return (
    <>
      <div className='page-header'>
        <h1>New Post</h1>
        <Link to='/posts' className='btn'>
          Back
        </Link>
      </div>

      <div className='page-content'>
        <form method='POST'>
          <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='body'>Post Body</label>
            <textarea
              name='body'
              id='body'
            />
          </div>
          <button type='submit' className='btn btn-block'>
            Add Post
          </button>
        </form>
      </div>
    </>
  )
}

export default NewPost;