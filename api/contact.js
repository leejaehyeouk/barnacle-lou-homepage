import { Resend } from 'resend'

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

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY 환경변수가 설정되지 않았습니다.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const typeLabel = TYPE_LABELS[type] || type

    const safeMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;')

    // 1. 담당자에게 문의 접수 알림 메일
    const { error: adminError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'LEE_JAEHYEOUK@eland.co.kr',
      reply_to: email,
      subject: `[따개비루] ${typeLabel} 문의 - ${name}`,
      html: `
        <div style="font-family:'Apple SD Gothic Neo',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #eee;">
          <div style="background:#F0A820;padding:24px 32px;">
            <h1 style="margin:0;color:#fff;font-size:20px;">따개비루 홈페이지 문의 접수</h1>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;width:110px;">이름 / 회사</td>
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
            <div style="background:#FBF6EE;border-left:4px solid #F0A820;padding:16px 20px;border-radius:0 8px 8px 0;">
              <p style="margin:0 0 8px;font-weight:bold;font-size:13px;color:#3D2B1F;">문의 내용</p>
              <p style="margin:0;font-size:13px;color:#5a4a3a;white-space:pre-wrap;line-height:1.7;">${safeMessage}</p>
            </div>
            <p style="margin:24px 0 0;font-size:11px;color:#9B7E6A;">* 이 메일은 따개비루 홈페이지에서 자동 발송되었습니다.</p>
          </div>
        </div>
      `,
    })

    if (adminError) {
      console.error('[contact api] 담당자 메일 오류:', JSON.stringify(adminError))
      return res.status(500).json({ error: `메일 전송 실패: ${adminError.message || JSON.stringify(adminError)}` })
    }

    // 2. 문의자에게 접수 확인 메일
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `[따개비루] 문의가 정상적으로 접수되었습니다.`,
      html: `
        <div style="font-family:'Apple SD Gothic Neo',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #eee;">
          <div style="background:#F0A820;padding:24px 32px;">
            <h1 style="margin:0;color:#fff;font-size:20px;">문의가 접수되었습니다</h1>
          </div>
          <div style="padding:32px;">
            <p style="margin:0 0 20px;font-size:15px;color:#3D2B1F;line-height:1.7;">안녕하세요, <strong>${name}</strong>님.<br>따개비루에 문의해 주셔서 감사합니다.<br>아래 내용으로 문의가 정상적으로 접수되었으며, 담당자 검토 후 빠르게 연락드리겠습니다.</p>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;width:110px;">문의 유형</td>
                <td style="padding:10px 14px;font-size:13px;border-bottom:1px solid #f0f0f0;">${typeLabel}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;">이름 / 회사</td>
                <td style="padding:10px 14px;font-size:13px;border-bottom:1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;background:#FFF0C8;font-weight:bold;font-size:13px;">연락처</td>
                <td style="padding:10px 14px;font-size:13px;border-bottom:1px solid #f0f0f0;">${phone || '-'}</td>
              </tr>
            </table>
            <div style="background:#FBF6EE;border-left:4px solid #F0A820;padding:16px 20px;border-radius:0 8px 8px 0;">
              <p style="margin:0 0 8px;font-weight:bold;font-size:13px;color:#3D2B1F;">문의 내용</p>
              <p style="margin:0;font-size:13px;color:#5a4a3a;white-space:pre-wrap;line-height:1.7;">${safeMessage}</p>
            </div>
            <p style="margin:28px 0 0;font-size:12px;color:#9B7E6A;line-height:1.8;">* 본 메일은 자동 발송 메일로 회신이 불가합니다.<br>* 추가 문의는 홈페이지 문의 폼을 이용해 주세요.</p>
          </div>
          <div style="background:#FFF8E7;padding:16px 32px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#C8943A;">따개비루 · Barnacle Lou</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('[contact api] 메일 전송 예외:', error.message)
    return res.status(500).json({ error: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' })
  }
}
