<?php 
$s = '<table style="background: url(http://ezi.co.ua/img/mch.jpg?qwe=12) top center / cover no-repeat; width: 800px; '.
		'margin: 0 auto; height: 800px; font-size: 22px; font-family: sans-serif; color: #464646; margin-bottom: 100px;">'.
			'<tbody>'.
				'<tr style="height: 580px;"></tr>'.
				'<tr>'.
					'<td style="text-align: center; padding: 0 50px; font-weight: bold;">Seasons greetings from all the team of EKOTON Industrial group</td>'.
				'</tr>'.
				'<tr>'.
					'<td style="text-align: center; padding: 0 50px;">May the holidays make Your dreams true and may the love You share throughout the year return a hundred-fold to You!</td>'.
				'</tr>'.
				'<tr>'.
					'<td style="text-align: center; padding: 0 50px;">We wish You all the success in Your professional and personal life!</td>'.
				'</tr>'.
			'</tbody>'.
		'</table>';
$headers = "Content-type: text/html; charset=utf-8" . "\r\n" . 'From: Ekoton Industrial Group <info@ekoton.com>' . "\r\n" . 'Reply-To: info@ekoton.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
mail(
    '380506487966@yandex.ua',
    mb_encode_mimeheader('Merry Christmas and Happy New Year'),
    $s,
    $headers
);
	
echo 'mail send' . time();