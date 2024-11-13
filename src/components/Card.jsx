import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img2 from '../assets/img2.png'

const ImgMediaCard = () => {

  return (
    <Card
      sx={{
        display: 'flex',
        maxWidth: '50vw', // Setengah layar
        // Latar belakang biru
        height: 'auto', // Menyesuaikan tinggi secara otomatis berdasarkan konten
        margin: '1rem 0' // Menambahkan margin atas dan bawah
      }}
      className= "!m-10 !bg-primary !rounded-md"
    >
      {/* Gambar di sebelah kiri */}
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={img2}
        sx={{ width: 200, objectFit: 'cover' }}
      />
      {/* Konten teks di sebelah kanan */}
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        className='!text-white !text-justify !font-sans !font-semibold'
      >
        <Typography gutterBottom variant="h5" component="div">
          Visi
        </Typography>
        <Typography variant="body2" className="!text-white !text-justify !font-sans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur consectetur voluptates enim unde eaque voluptatem commodi illum minima praesentium amet cupiditate totam eligendi a iure, eum explicabo ducimus ullam dolore aperiam harum porro saepe maxime! Quidem numquam corrupti, porro voluptas maiores fuga quis dignissimos libero et amet quam debitis perspiciatis cum vero accusamus officia? Aliquid fuga corrupti ratione iure adipisci veritatis dignissimos minus! Quo dolores corporis obcaecati non maxime aliquid suscipit debitis atque accusantium sequi libero doloribus, veritatis hic tenetur?
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ImgMediaCard