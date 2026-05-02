import { useState, useRef } from 'react'
import { Upload, X, Image, Loader2 } from 'lucide-react'

interface Props {
  value: string
  onChange: (url: string) => void
  label?: string
}

export default function ImageUpload({ value, onChange, label = 'Image' }: Props) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(value)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview immediately
    const reader = new FileReader()
    reader.onload = (ev) => {
      setPreview(ev.target?.result as string)
    }
    reader.readAsDataURL(file)

    // Upload
    setUploading(true)
    try {
      const base64 = await fileToBase64(file)
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: base64,
          filename: file.name,
          contentType: file.type,
        }),
      })
      const data = await res.json()
      if (data.url) {
        onChange(data.url)
        setPreview(data.url)
      }
    } catch (err) {
      console.error('Upload failed:', err)
    }
    setUploading(false)
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        resolve(result.split(',')[1]) // Remove data:...;base64, prefix
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const clear = () => {
    onChange('')
    setPreview('')
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <div>
      <label className="text-sm font-semibold text-navy mb-1 block">{label}</label>
      
      {/* URL input */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={value}
          onChange={e => { onChange(e.target.value); setPreview(e.target.value) }}
          className="flex-1 px-4 py-2.5 rounded-lg border border-cream-dark bg-cream/30 focus:outline-none focus:border-gold text-sm"
          placeholder="Paste image URL or upload below"
        />
        {value && (
          <button type="button" onClick={clear} className="p-2.5 rounded-lg border border-cream-dark text-slate hover:text-red-500 hover:border-red-200 transition-colors">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Upload button */}
      <div
        onClick={() => fileRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
          uploading ? 'border-gold/50 bg-gold/5' : 'border-cream-dark hover:border-gold/30 hover:bg-cream/30'
        }`}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
        {uploading ? (
          <div className="flex items-center justify-center gap-2 text-gold">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm font-semibold">Uploading...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-slate">
            <Upload size={18} />
            <span className="text-sm">Click to upload image (JPG, PNG, WebP)</span>
          </div>
        )}
      </div>

      {/* Preview */}
      {preview && (
        <div className="mt-3 relative rounded-lg overflow-hidden border border-cream-dark">
          <img src={preview} alt="Preview" className="w-full h-32 object-cover" />
          <button
            type="button"
            onClick={clear}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  )
}
