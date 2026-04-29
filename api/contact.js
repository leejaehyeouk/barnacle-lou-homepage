import nodemailer from 'nodemailer'

const TYPE_LABELS = {
  licensing: 'IP 라이센싱',
  goods: '굿즈 제작',
  collab: '브랜드 콜라보',
  media: '미디어·출판',
  other: '기타 문의',
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, type, message } = req.body

  if (!name || !email || !type || !message) {
    return res.status(400).json({ error: '필수 항목이 누락되었습니다.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const typeLabel = TYPE_LABELS[type] || type

    await transporter.sendMail({
      from: `"따개비루 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'LEE_JAEHYEOUK@eland.co.kr',
      replyTo: email,
      subject: `[따개비루] ${typeLabel} 문의 - ${name}`,
      html: `
        <div style="font-family:'Apple SD Gothic Neo',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #eee;">
          <div style="background:#F0A820;padding:24px 32px;">
            <h1 style="margin:0;color:#fff;font-size:20px;">따개비루 홈페이지 문의 접수</h1>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;width:110px;border-radius:4px 0 0 4px;">이름 / 회사</td>
                <td style="padding:10px 14px;font-size:13px;border-bottom:1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;">이메일</td>
                <td style="padding:10px 14px;font-size:13px;border-bottom:1px solid #f0f0f0;"><a href="mailto:${email}" style="color:#F0A820;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;">연락처</td>
                <td style="padding:10px 14px;font-size:13px;border-bottom:1px solid #f0f0f0;">${phone || '-'}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;">문의 유형</td>
                <td style="padding:10px 14px;font-size:13px;">${typeLabel}</td>
              </tr>
            </table>
            <div style="background:#FBF6EE;border-left:4px solid #F0A820;border-radius:0 8px 8px 0;padding:16px 20px;">
              <p style="margin:0 0 8px;font-weight:bold;font-size:13px;color:#3D2B1F;">문의 내용</p>
              <p style="margin:0;font-size:13px;color:#5a4a3a;white-space:pre-wrap;line-height:1.7;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
            <p style="margin:24px 0 0;font-size:11px;color:#9B7E6A;">* 이 메일은 따개비루 홈페이지(olivelou.com)에서 자동 발송되었습니다.</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('[contact api] 메일 전송 오류:', error.message)
    return res.status(500).json({ error: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' })
  }
}
