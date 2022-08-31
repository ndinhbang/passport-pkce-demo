composer update -vvv

php artisan migrate

php artisan db:seed

php artisan key:generate

copy .env.example -> .env và thay đổi các thông số cho phù hợp

npm install -g pnpm

pnpm install

pnpm build

Tạo 1 public client theo hướng dẫn tại link: https://laravel.com/docs/9.x/passport#creating-a-auth-pkce-grant-client 

sau đó lấy client_id điền vào mục VITE_PASSPORT_AUTHORIZATION_CODE_CLIENT_ID trong file .env

Truy cập vào đường dẫn /admin, sau đó nhấn login (mở devtool tab network để theo dõi quá trình redirect)
