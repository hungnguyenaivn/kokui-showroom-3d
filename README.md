# Kokui Showroom 3D

Mô hình 3D văn phòng – showroom tầng 2 (12,0 × 10,6 m), dựng bằng Three.js, chạy trực tiếp trên trình duyệt.

## Cấu trúc

- `van-phong-3d.html`: mã nguồn mô hình (dạng page fragment, dùng để chỉnh sửa).
- `index.html`: bản đầy đủ để deploy, sinh tự động từ file trên.
- `scripts/build.mjs`: script sinh `index.html`.

## Cập nhật

```sh
node scripts/build.mjs
git add -A && git commit -m "Cập nhật mô hình" && git push
```

Vercel tự deploy lại sau mỗi lần push lên nhánh `main`.

## Xem trên máy

Mở `index.html` bằng trình duyệt, hoặc chạy `npx serve .`
