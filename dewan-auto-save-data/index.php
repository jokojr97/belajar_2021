<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <link rel="icon" href="dk.png">
  <title>Dewan Komputer | Auto save dengan Ajax</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand text-white" href="index.php">
      Dewan Komputer
    </a>
  </nav>

  <div class="container">
    <h2 align="center" class="mt-4 mb-4">Simpan Otomatis dengan Ajax, PHP dan Mysql</h2>
    <div class="form-group">
      <label>Judul</label>
      <input type="text" name="judul" id="judul" class="form-control" />
    </div>
    <div class="form-group">
      <label>Deskripsi</label>
      <textarea name="deksripsi" id="deksripsi" rows="6" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <button type="button" name="publish" class="btn btn-info">Publish</button>
    </div>
    <div class="form-group">
      <input type="hidden" name="post_id" id="post_id" />
      <div id="autoSave"></div>  
    </div>  
  </div>

  <div class="p-2 text-white bg-secondary text-center fixed-bottom">© <?php echo date('Y'); ?> Copyright:
      <a href="https://dewankomputer.com/"> Dewan Komputer</a>
  </div>

  <script>
    $(document).ready(function(){
      function autoSave(){
        var judul = $('#judul').val();
        var deksripsi = $('#deksripsi').val();
        var post_id = $('#post_id').val();
        if(judul != '' ||deksripsi != '') {
          $.ajax({
            url:"auto_save.php",
            method:"POST",
            data:{judul:judul, deksripsi:deksripsi, post_id:post_id},
            dataType:"text",
            success:function(data){
              if(data != ''){
                $('#post_id').val(data);
              }
              $('#autoSave').text("Post save as draft");
              setInterval(function(){
                $('#autoSave').text('');
              }, 5000);
            }
          });
        }
      }
      setInterval(function(){
        autoSave();
      }, 10000); // simpan tiap 10 detik
    });
  </script>
</body>
</html>